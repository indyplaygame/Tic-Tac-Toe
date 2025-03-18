import { setCookie, getCookie, API_URL, WEBSOCKET_URL } from "./util.js";

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

    const password = visibility === "private" ? settings.joinPassword.value : "";

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

        await joinOnlineGame(game_id, password);
    } catch(error) {
        console.error(`An error occurred while creating the online game: ${error}`);
    }
};

const joinOnlineGame = async (gameId, password) => {
    const url = password !== null && password !== "" ? `${WEBSOCKET_URL}/game/join/${gameId}?pass=${password}` : `${WEBSOCKET_URL}/game/join/${gameId}`;

    try {
        const socket = new WebSocket(url);

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

        const name = document.createElement('h3');
        name.innerHTML = game.name;
        element.appendChild(name);

        const gameId = document.createElement('p');
        gameId.innerHTML = game.uuid;
        element.appendChild(gameId);


        gameList.appendChild(element);
    })
};

window.createOnlineGame = createOnlineGame;
window.refreshGameList = refreshGameList;

document.addEventListener('DOMContentLoaded', async () => {
    await auth();
    await refreshGameList();
});