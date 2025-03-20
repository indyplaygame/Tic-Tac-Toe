import { copyToClipboard, getTranslation } from "./util.js";

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

        this.socket.onclose = () => {
            this.game_list.classList.remove('hide');
            this.game_lobby.classList.add('hide');

            const player_ready = this.ready_btn;
            player_ready.removeEventListener('click', this.#readyButtonHandler);
        };
    }

    onSocketMessage = (event) => {
        const data = JSON.parse(event.data);
        const type = data.type;

        switch(type) {
            case 'on_join':
                this.onJoin(data.game, data.is_owner);
                break;
            case 'player_join':
                this.onPlayerJoin(data.player);
                break;
            case 'player_leave':
                this.onPlayerLeave(data.player_id);
                break;
            case 'player_symbol':
                this.onPlayerSymbolChange(data.player_id, data.symbol);
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

    updateSymbols = () => {
        const payload = [];

        for(const player of this.player_list.querySelectorAll('.player-item')) {
            const player_id = player.getAttribute('player-id');
            const symbol_switch = player.querySelector('.symbol-switch');
            const input = symbol_switch.querySelector('input');

            payload.push({
                player_id: Number.parseInt(player_id),
                symbol: input.checked ? 'O' : 'X'
            })
        }

        this.socket.send(JSON.stringify({
            type: 'update_symbols',
            symbols: payload
        }));
    };

    onJoin = (game_data, is_owner) => {
        const game_name = this.game_lobby.querySelector('.game-name');
        const game_uuid = this.game_lobby.querySelector('.game-uuid');
        const game_code = this.game_lobby.querySelector('.game-code');
        const player_ready = this.ready_btn;

        const name = game_data.name;
        const uuid = game_data.uuid;
        const code = game_data.join_code;
        this.player_is_owner = is_owner;

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

        this.updateSymbols();
    };

    onPlayerJoin = (player) => {
        const player_element = document.createElement('div');
        player_element.classList.add('player-item');
        player_element.classList.add(`player${player.id}`);
        player_element.setAttribute('player-id', player.id);

        const player_name = document.createElement('h3');
        player_name.innerHTML = player.name;
        player_element.appendChild(player_name);

        const end = document.createElement('div');
        end.classList.add('end');

        const symbol_switch = document.createElement('label');
        symbol_switch.classList.add('symbol-switch');
        symbol_switch.setAttribute('for', `player${player.id}-symbol`); {
            const input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'player-symbol');
            input.setAttribute('id', `player${player.id}-symbol`);

            input.click();

            const slider = document.createElement('div');
            slider.classList.add('slider');

            const x = document.createElement('i');
            x.classList.add('ti');
            x.classList.add('ti-x');

            const o = document.createElement('i');
            o.classList.add('ti');
            o.classList.add('ti-circle');

            slider.appendChild(x);
            slider.appendChild(o);
            symbol_switch.appendChild(input);
            symbol_switch.appendChild(slider);
        }
        if(!this.player_is_owner) symbol_switch.classList.add('disabled');
        else symbol_switch.addEventListener('change', this.#symbolSwitchHandler);
        end.appendChild(symbol_switch);

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
        end.appendChild(player_ready);
        player_element.appendChild(end);

        this.player_list.appendChild(player_element);
    };

    onPlayerLeave = (player_id) => {
        const player_item = this.player_list.querySelector(`.player${player_id}`);
        player_item.remove();
    };

    onPlayerSymbolChange = (player_id, symbol) => {
        const player_item = this.player_list.querySelector(`.player${player_id}`);
        const symbol_switch = player_item.querySelector('.symbol-switch');
        const input = symbol_switch.querySelector('input');

        input.checked = symbol === 'O';
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

        this.lockBoard(true);
    };

    lockBoard = (lock) => {
        if(lock) this.board_element.classList.add("locked");
        else this.board_element.classList.remove("locked");
    };

    #readyButtonHandler = (event) => this.updateReadiness(this.ready_btn.querySelector('input').checked);

    #symbolSwitchHandler = (event) => this.updateSymbols();
}