import { setCookie, getCookie, getTranslation, API_URL, WEBSOCKET_URL, GameVisibility } from "./util.js";
import { OnlineGame } from "./online_game.js";

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

        return response.status === 200;
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
    const visibility = settings.querySelector('.game-visibility-selector .options .option.active')
        .getAttribute('val');
    const starting_player = settings.querySelector('.starting-player-selector .options .option.active')
        .getAttribute('val');

    const password = visibility === "private" ? settings.gamePassword.value : "";

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

        const data = await response.json();
        const game_id = data["game_id"];

        await joinGame(game_id, password);
    } catch(error) {
        console.error(`An error occurred while creating the online game: ${error}`);
    }
};

const joinGame = async (gameId, password) => {
    const url = password ? `${WEBSOCKET_URL}/game/join/${gameId}?pass=${password}` : `${WEBSOCKET_URL}/game/join/${gameId}`;

    try {
        onlineGame = new OnlineGame(url);

        closeCreateGame();
    } catch(error) {
        console.error(`An error occurred while joining the online game: ${error}`);
    }
};

const joinOnlineGame = async () => {
    const join_game_form = document.forms['join-online-game'];
    const gameCode = join_game_form.gameCode.value;
    const password = join_game_form.joinPassword.value;

    try {
        const url = `${API_URL}/game/resolve/${gameCode}`;
        const response = await fetch(url);

        const data = await response.json();
        if(data.visibility === GameVisibility.PRIVATE && password === "") {
            const password_field = join_game_form.querySelector('.game-password');
            password_field.classList.remove('hide');
        } else {
            await joinGame(data.uuid, password);
            closeJoinGame();
        }
    } catch(error) {
        console.error(`An error occurred while joining the online game: ${error}`);
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
        console.error(`An error occurred while listing the online games: ${error}`);
    }
};

const auth = async () => {
    let token = getCookie("token");
    if(token)
        if(await verifyToken(token)) return;

    token = await generateToken();
    if(!token) {
        const mode_selector = document.querySelector('.mode-selector');
        const online_pvp = mode_selector.querySelector(".option[val='online_pvp']");
        online_pvp.disabled = true;

        return;
    }

    setCookie("token", token, "/");
};

const refreshGameList = async () => {
    const games = await listOnlineGames();
    const gameList = document.querySelector('.game-page.online-pvp .game-list .list');

    if(games.length === 0) {
        gameList.innerHTML = "<p>No games found</p>";
        return;
    }

    gameList.innerHTML = "";
    games.forEach(game => {
        const element = document.createElement('div');
        element.classList.add('game-item');

        const column = document.createElement('div');
        column.classList.add('column');

        const name = document.createElement('h3');
        name.innerHTML = game.name;
        column.appendChild(name);

        const gameId = document.createElement('p');
        gameId.innerHTML = game.uuid;
        column.appendChild(gameId);
        element.appendChild(column);

        const players = document.createElement('p');
        players.innerHTML = `${game.player_count} ${game.player_count !== 1 ? getTranslation('players') : getTranslation('player')}`;
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

window.test = () => {
    onlineGame.websocketTest();
};

document.addEventListener('DOMContentLoaded', async () => {
    await auth();
    await refreshGameList();
});