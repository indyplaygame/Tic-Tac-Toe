import {copyToClipboard, getTranslation} from "./util.js";

export class OnlineGame {
    constructor(url) {
        this.socket = new WebSocket(url);
        this.socket.onmessage = this.onSocketMessage;

        this.game_list = document.querySelector('.game-page.online-pvp .game-list');
        this.game_lobby = document.querySelector('.game-page.online-pvp .game-lobby');
        this.game_room = document.querySelector('.game-page.online-pvp .game-room');
        this.player_list = this.game_lobby.querySelector('.player-list');
        this.ready_btn = this.game_lobby.querySelector('.ready-btn');

        this.game_element = document.querySelector('.game-page.online-pvp .game');

        this.socket.onopen = () => {
            this.game_list.classList.add('hide');
            this.game_lobby.classList.remove('hide');
        };
    }

    onSocketMessage = (event) => {
        const data = JSON.parse(event.data);
        const type = data.type;

        switch(type) {
            case 'on_join':
                this.onJoin(data.game);
                break;
            case 'player_join':
                this.onPlayerJoin(data.player);
                break;
            case 'player_leave':
                this.onPlayerLeave(data.player_id);
                break;
            case 'player_ready':
                this.onPlayerReady(data.player_id, data.ready);
                break;
            case 'game_start':
                this.startGame();
                break;
            default:
                console.log(data);
        }
    };

    websocketTest = () => {
        this.socket.send(JSON.stringify({test: "test"}));
    };

    updateReadiness = (ready) => {
        this.socket.send(JSON.stringify({
            type: 'update_readiness',
            ready: ready
        }));
        this.ready_btn.querySelector('span').innerHTML = getTranslation(ready ? 'waitingForPlayers' : 'ready');
    };

    onJoin = (game_data) => {
        const game_name = this.game_lobby.querySelector('.game-name');
        const game_uuid = this.game_lobby.querySelector('.game-uuid');
        const game_code = this.game_lobby.querySelector('.game-code');
        const player_ready = this.ready_btn;

        const name = game_data.name;
        const uuid = game_data.uuid;
        const code = game_data.join_code;

        game_name.innerHTML = name;
        game_uuid.querySelector('p').innerHTML = uuid;
        game_uuid.addEventListener('click', () => copyToClipboard(uuid));
        game_code.querySelector('h3').innerHTML = code;
        game_code.querySelector('.copy-code').addEventListener('click', () => copyToClipboard(code));

        this.player_list.innerHTML = '';
        for(const player of game_data.players) {
            this.onPlayerJoin(player);
        }

        player_ready.addEventListener('click', this.#readyButtonHandler);
    };

    onPlayerJoin = (player) => {
        const player_element = document.createElement('div');
        player_element.classList.add('player-item');
        player_element.classList.add(`player${player.id}`);

        const player_name = document.createElement('h3');
        player_name.innerHTML = player.name;
        player_element.appendChild(player_name);

        const player_ready = document.createElement('div');
        player_ready.classList.add('player-ready'); {
            const p = document.createElement('p');
            p.innerHTML = player.ready ? 'Ready' : 'Not ready';
            player_ready.appendChild(p);

            const icon = document.createElement('i');
            icon.classList.add('ti');
            icon.classList.add(player.ready ? 'ti-check' : 'ti-x');
            player_ready.appendChild(icon);
        }
        player_element.appendChild(player_ready);

        this.player_list.appendChild(player_element);
    };

    onPlayerLeave = (player_id) => {
        const player_item = this.player_list.querySelector(`.player${player_id}`);
        player_item.remove();
    };

    onPlayerReady = (player_id, ready) => {
        const player_item = this.player_list.querySelector(`.player${player_id}`);
        const player_ready = player_item.querySelector('.player-ready');
        const icon = player_ready.querySelector('.ti');
        const text = player_ready.querySelector('p');

        icon.classList.remove('ti-check');
        icon.classList.remove('ti-x');
        icon.classList.add(ready ? 'ti-check' : 'ti-x');

        text.innerHTML = ready ? getTranslation('ready') : getTranslation('notReady');
    };

    leave = () => {
        this.socket.close();
        this.game_list.classList.remove('hide');
        this.game_lobby.classList.add('hide');

        const player_ready = this.ready_btn;
        player_ready.removeEventListener('click', this.#readyButtonHandler);
    };

    startGame = () => {
        this.game_lobby.classList.add('hide');
        this.game_room.classList.remove('hide');

        const size = 3;
        this.board = new Array(size).fill(null).map(() => new Array(size).fill(0));
        this.board_element = document.createElement("table");
        this.board_element.classList.add("board");
        this.game_element.appendChild(this.board_element);

        for(let i = 0; i < size; i++) {
            const row = document.createElement("tr");
            for(let j = 0; j < size; j++) {
                const cell = document.createElement("td");
                const div = document.createElement("div");

                div.classList.add("cell");
                div.setAttribute("row", i.toString());
                div.setAttribute("col", j.toString());

                cell.appendChild(div);
                row.appendChild(cell);
            }
            this.board_element.appendChild(row);
        }
    };

    #readyButtonHandler = (event) => this.updateReadiness(this.ready_btn.querySelector('input').checked);
}