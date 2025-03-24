import {
    copyToClipboard,
    getCookie,
    getTranslation,
    showMessage,
    removeListeners,
    BASE_URL,
    WebSocketStatus
} from "./util.js";

const SYMBOLS = {
    'x': 'ti-x',
    'o': 'ti-circle'
}

const WinState = {
    WIN: "WIN",
    DRAW: "DRAW",
    LOSS: "LOSS"
}

export class OnlineGame {
    constructor(url) {
        this.socket = new WebSocket(url);
        this.socket.onmessage = this.onSocketMessage;

        this.game_list = document.querySelector('.game-page.online-pvp .game-list');
        this.game_lobby = document.querySelector('.game-page.online-pvp .game-lobby');
        this.game_room = document.querySelector('.game-page.online-pvp .game-room');
        this.game_over_screen = document.querySelector('.game-page.online-pvp .game-over-screen');
        this.player_list = this.game_lobby.querySelector('.player-list');
        this.ready_btn = this.game_lobby.querySelector('.ready-btn');

        this.game_element = document.querySelector('.game-page.online-pvp .game');
        this.board_element = null;
        this.turn_icon = this.game_element.querySelector('.turn-text .icon');
        this.enemy_thinking_text = this.game_element.querySelector('.enemy-thinking-text');

        this.socket.onopen = () => {
            this.game_list.classList.add('hide');
            this.game_lobby.classList.remove('hide');

            this.socket.send(JSON.stringify({
                "type": "auth",
                "token": getCookie("token")
            }));
        };

        this.socket.onclose = (event) => {
             switch(event.code) {
                case WebSocketStatus.BAD_REQUEST:
                    showMessage('error', getTranslation('badRequest'));
                    break;
                case WebSocketStatus.UNAUTHORIZED:
                    showMessage('error', getTranslation('unauthorized'));
                    break;
                case WebSocketStatus.FORBIDDEN:
                    showMessage('error', getTranslation('forbidden'));
                    break;
                case WebSocketStatus.NOT_FOUND:
                    showMessage('error', getTranslation('notFound'));
                    break;
                case WebSocketStatus.INTERNAL_SERVER_ERROR:
                    showMessage('error', getTranslation('internalServerError'));
                    break;
                default:
                    break;
            }

            this.game_list.classList.remove('hide');
            this.game_lobby.classList.add('hide');
            this.game_room.classList.add('hide');
            this.game_over_screen.classList.add('hide');

            removeListeners(this.game_lobby.querySelector('.game-uuid'));
            removeListeners(this.game_lobby.querySelector('.game-code'));

            const player_ready = this.ready_btn; {
                const text = player_ready.querySelector('span');
                text.setAttribute("data-lang", "ready");
                text.innerHTML = getTranslation('ready');

                const input = player_ready.querySelector('input');
                input.checked = false;
                input.removeEventListener('click', this.#readyButtonHandler);
            }

            if(this.board_element) this.board_element.remove();
        };
    }

    onSocketMessage = (event) => {
        const data = JSON.parse(event.data);
        const type = data.type;

        switch(type) {
            case 'error':
                this.onError(data.error, data.target)
                break;
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
                break;
            case 'player_ready':
                this.onPlayerReady(data.player_id, data.ready);
                break;
            case 'player_turn':
                this.onPlayerTurn(data.symbol);
                break;
            case 'player_move':
                this.onPlayerMove(data.move);
                break;
            case 'game_start':
                this.startGame();
                break;
            case 'game_turn':
                this.gameTurn();
                break;
            case 'game_end':
                this.endGame(data);
                break;
            default:
                console.log(data);
        }
    };

    updateReadiness = (ready) => {
        this.socket.send(JSON.stringify({
            type: 'update_readiness',
            ready: ready
        }));

        const ready_text = this.ready_btn.querySelector('span');
        ready_text.setAttribute("data-lang", ready ? "waitingForPlayers" : "ready");
        ready_text.innerHTML = getTranslation(ready ? 'waitingForPlayers' : 'ready');
    };

    updateSymbols = () => {
        if(!this.player_is_owner) return;

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

    onError = (error, target) => {
        if(target === 'console') console.error("WebSocket error: ", error);
        else if(target === 'user') showMessage('error', getTranslation(error));
    };

    onJoin = (game_data, is_owner) => {
        const game_name = this.game_lobby.querySelector('.game-name');
        const game_uuid = this.game_lobby.querySelector('.game-uuid');
        const game_code = this.game_lobby.querySelector('.game-code');

        const name = game_data.name;
        const uuid = game_data.uuid;
        const code = game_data.join_code;
        this.player_is_owner = is_owner;

        game_name.textContent = name;
        game_uuid.querySelector('p').textContent = uuid;
        game_uuid.addEventListener('click', () => copyToClipboard(`${BASE_URL}?join=${uuid}`, getTranslation('copyLink')));
        game_code.querySelector('h3').textContent = code;
        game_code.querySelector('.copy-code').addEventListener('click', () => copyToClipboard(code, getTranslation('copyCode')));

        this.player_list.innerHTML = '';
        for(const player of game_data.players) {
            this.onPlayerJoin(player);
        }

        this.ready_btn.querySelector('input').addEventListener('click', this.#readyButtonHandler);
    };

    onPlayerJoin = (player) => {
        const player_element = document.createElement('div');
        player_element.classList.add('player-item', `player${player.id}`);
        player_element.setAttribute('player-id', player.id);

        const player_name = document.createElement('h3');
        player_name.innerHTML = player.name;
        player_element.appendChild(player_name);

        const end = document.createElement('div');
        end.classList.add('end');

        const symbol_switch = document.createElement('label');
        if(!this.player_is_owner) symbol_switch.classList.add('disabled');
        else symbol_switch.addEventListener('change', this.#symbolSwitchHandler);
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
            x.classList.add('ti', 'ti-x');

            const o = document.createElement('i');
            o.classList.add('ti', 'ti-circle');

            slider.appendChild(x);
            slider.appendChild(o);
            symbol_switch.appendChild(input);
            symbol_switch.appendChild(slider);
        }
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

        this.updateSymbols();
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

    onPlayerTurn = (symbol) => {
        this.turn_icon.classList.remove('ti-x');
        this.turn_icon.classList.remove('ti-circle');
        this.turn_icon.classList.add(SYMBOLS[symbol.toLowerCase()]);
    };

    onPlayerMove = (move) => {
        const row = move.row;
        const col = move.col;
        const symbol = move.symbol;
        const value = move.value;

        const cell = this.board_element.querySelector(`[row="${row}"][col="${col}"]`);

        this.board[row][col] = value;
        cell.innerHTML = `<i class='ti ${SYMBOLS[symbol.toLowerCase()]}'></i>`;
        cell.removeEventListener("click", this.playerMove);
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
                div.addEventListener("click", this.playerMove);

                cell.appendChild(div);
                row.appendChild(cell);
            }
            this.board_element.appendChild(row);
        }

        this.lockBoard(true);
    };

    gameTurn = () => {
        this.lockBoard(false);
    };

    endGame = (data) => {
        const game_over_text = this.game_over_screen.querySelector('.game-over-text');
        this.enemy_thinking_text.classList.add("invisible");

        const winner = data.winner;
        switch(data.state) {
            case WinState.WIN:
                game_over_text.innerHTML = getTranslation('gameWon');
                break;
            case WinState.LOSS:
                game_over_text.innerHTML = getTranslation('gameWin').replace('{player}', `<i class='ti ${SYMBOLS[winner.symbol.toLowerCase()]}'></i>`);
                break;
            case WinState.DRAW:
                game_over_text.innerHTML = getTranslation('gameTie');
                break;
        }

        this.game_over_screen.classList.remove('hide');

        const play_again_btn = this.game_over_screen.querySelector('.button.restart-game');
        const leave_game_btn = this.game_over_screen.querySelector('.button.leave-game-btn');

        play_again_btn.addEventListener('click', this.playAgain);
        leave_game_btn.addEventListener('click', this.leave)
    }

    playAgain = () => {
        this.game_lobby.classList.remove('hide');
        this.game_room.classList.add('hide');
        this.game_over_screen.classList.add('hide');

        const player_ready = this.ready_btn; {
            const text = player_ready.querySelector('span');
            text.setAttribute("data-lang", "ready");
            text.innerHTML = getTranslation('ready');

            player_ready.querySelector('input').checked = false;
        }

        this.player_list.querySelectorAll('.player-item').forEach(player => {
            const player_ready = player.querySelector('.player-ready');
            const icon = player_ready.querySelector('.ti');
            const text = player_ready.querySelector('p');

            icon.classList.remove('ti-check');
            icon.classList.add('ti-x');

            text.innerHTML = getTranslation('notReady');
        })

        this.game_element.querySelectorAll('.board').forEach(board => board.remove());
    };

    playerMove = (event) => {
        const cell = event.target;
        const row = parseInt(cell.getAttribute("row"));
        const col = parseInt(cell.getAttribute("col"));

        if(this.board[row][col] !== 0) return;

        this.socket.send(JSON.stringify({
            type: 'move',
            row: row,
            col: col
        }));

        this.lockBoard(true);
    };

    lockBoard = (lock) => {
        if(lock) {
            this.board_element.classList.add("locked");
            this.enemy_thinking_text.classList.remove("invisible");
        } else {
            this.board_element.classList.remove("locked");
            this.enemy_thinking_text.classList.add("invisible");
        }
    };

    #readyButtonHandler = (event) => {
        this.updateReadiness(this.ready_btn.querySelector('input').checked);
    }

    #symbolSwitchHandler = (event) => {
        this.updateSymbols();
    }
}