import { OnlineGame } from "./online_game.js";
import {
    setCookie,
    getCookie,
    getTranslation,
    showMessage,
    API_URL,
    WEBSOCKET_URL,
    GameVisibility,
    HttpStatus, HttpStatusCode
} from "./util.js";

let onlineGame;

const generateToken = async () => {
    const url = `${API_URL}/auth/generate-token`;

    try {
        const response = await fetch(url, {method: "POST"});
        const data = await response.json();
        return data["token"];
    } catch(error) {
        console.error(`An error occurred while generating the token: ${error}`);
    }
};

const verifyToken = async (token) => {
    const url = `${API_URL}/auth/verify/${token}`;

    try {
        const response = await fetch(url, {method: "POST"});

        if(response.status !== HttpStatus.OK) {
            console.error(`An error occurred while verifying the token: ${response.status}`);
            return false;
        }

        const data = await response.json();
        return Number.parseInt(data.status) === HttpStatus.OK;
    } catch(error) {
        console.error(`An error occurred while verifying the token: ${error}`);
        return false;
    }
};

const createOnlineGame = async () => {
    const url = `${API_URL}/game/create`;
    const settings = document.forms['online-game-settings'];

    const token = getCookie("token");
    if(!token) return;

    const name = settings.gameName.value;
    if(!name.match(/[a-zA-Z0-9 ]{3,20}/)) {
        showMessage('error', getTranslation('invalidGameName'));
        return;
    }

    const visibility = settings.querySelector('.game-visibility-selector .options .option.active')
        .getAttribute('val').toUpperCase();
    const starting_player = settings.querySelector('.starting-player-selector .options .option.active')
        .getAttribute('val');

    const password = visibility === GameVisibility.PRIVATE ? settings.gamePassword.value : "";

    if(visibility === GameVisibility.PRIVATE && !password.match(/^[a-zA-Z0-9!@#$%^&*-_]{6,20}$/)) {
        showMessage('error', getTranslation('invalidPasswordFormat'));
        return;
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                name: name,
                visibility: visibility,
                starting_player: starting_player,
                password: password
            })
        });

        if(response.status !== HttpStatus.CREATED) {
            showMessage('error', getTranslation('createGameError') + ` (${response.status} ${HttpStatusCode[response.status]})`);
            return;
        }

        const data = await response.json();
        const game_id = data["game_id"];

        await joinGame(game_id, password);
        closeCreateGame();
    } catch(error) {
        showMessage('error', getTranslation('createGameError'))
    }
};

const joinGame = async (gameId, password) => {
    const url = password ? `${WEBSOCKET_URL}/game/join/${gameId}?pass=${password}` : `${WEBSOCKET_URL}/game/join/${gameId}`;

    try {
        if(onlineGame) onlineGame.leave();
        onlineGame = new OnlineGame(url);
    } catch(error) {
        showMessage('error', getTranslation('joinGameError'));
    }
};

const joinOnlineGame = async () => {
    const join_game_form = document.forms['join-online-game'];
    const gameCode = join_game_form.gameCode.value;
    const password = join_game_form.joinPassword.value;

    if(!gameCode.match(/[a-zA-Z0-9]{6}/)) {
        showMessage('error', getTranslation('invalidGameCode'));
        return;
    }

    try {
        const url = `${API_URL}/game/resolve/${gameCode}`;
        const response = await fetch(url);

        if(response.status === HttpStatus.NOT_FOUND) {
            showMessage('error', getTranslation('gameNotFound'));
            return;
        }

        const data = await response.json();
        if(!data.uuid) return;

        if(data.visibility === GameVisibility.PRIVATE && password === "") {
            const password_field = join_game_form.querySelector('.game-password');
            password_field.classList.remove('hide');
        } else {
            await joinGame(data.uuid, password);
            closeJoinGame();
        }
    } catch(error) {
        showMessage('error', getTranslation('joinGameError'));
    }
};

const listOnlineGames = async () => {
    const url = `${API_URL}/game/list`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return await response.json();
    } catch(error) {
        showMessage('error', getTranslation('listGamesError'));
        return null;
    }
};

export const auth = async () => {
    const mode_selector = document.querySelector('.mode-selector');
    const online_pvp = mode_selector.querySelector(".option[val='online_pvp']");

    let token = getCookie("token");
    if(token)
        if(await verifyToken(token)) {
            online_pvp.disabled = false;
            return;
        }

    token = await generateToken();
    if(!token) {
        online_pvp.disabled = true;

        return;
    } else {
        online_pvp.disabled = false;
    }

    setCookie("token", token, "/", 0, {secure: true, same_site: "None"});
};

export const refreshGameList = async () => {
    const games = await listOnlineGames();
    const gameList = document.querySelector('.game-page.online-pvp .game-list .list');

    if(games === null || games.length === 0) {
        gameList.innerHTML = `<p class="no-games" data-lang="noGamesFound">${getTranslation('noGamesFound')}</p>`;
        return;
    }

    gameList.innerHTML = "";
    games.forEach(game => {
        const element = document.createElement('div');
        element.classList.add('game-item');

        const column = document.createElement('div');
        column.classList.add('column');

        const name = document.createElement('h3');
        name.textContent = game.name;
        column.appendChild(name);

        const gameId = document.createElement('p');
        gameId.textContent = game.uuid;
        column.appendChild(gameId);
        element.appendChild(column);

        const players = document.createElement('p');
        players.textContent = `${game.player_count} ${game.player_count !== 1 ? getTranslation('players') : getTranslation('player')}`;
        element.appendChild(players);

        element.addEventListener('click', () => {
            joinGame(game.uuid);
        })

        gameList.appendChild(element);
    })
};

const leaveGame = () => {
    onlineGame.leave();
    closeLeaveGame();
    refreshGameList().then(r => {});
};

window.createOnlineGame = createOnlineGame;
window.joinOnlineGame = joinOnlineGame;
window.refreshGameList = refreshGameList;
window.leaveGame = leaveGame;

export { joinGame };