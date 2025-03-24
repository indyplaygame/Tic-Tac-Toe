import { Bot } from './bot.js';
import { getTranslation,  showMessage } from "./util.js";

const WinState = {
    Player1: 0,
    Player2: 1,
    Draw: -1
}
const SYMBOLS = {
    'x': 'ti-x',
    'o': 'ti-circle'
};

const mode_selector = document.querySelector('.mode-selector');

class Game {
    #game_element; #board_element; #turn_text; #game_over_screen;
    #player_turn; #players;
    #board; #board_size; #weights; #free_cells;

    constructor(game_element, game_over_element, size, starting_player, difficulty = null) {
        this.#game_element = game_element;
        this.#game_over_screen = game_over_element;
        this.#turn_text = this.#game_element.querySelector('.turn-text .icon');
        this.generateBoard(size, difficulty !== null);

        this.#board_size = size;
        this.#free_cells = size * size;
        this.#weights = {
            rows: new Array(size).fill(0),
            cols: new Array(size).fill(0),
            diag1: 0,
            diag2: 0
        }

        this.#player_turn = 0;
        this.#players = {
            0: {
                name: starting_player.toUpperCase(),
                symbol: SYMBOLS[starting_player.toLowerCase()],
                value: 1,
                isBot: difficulty && starting_player.toLowerCase() === 'x',
                bot: difficulty && starting_player.toLowerCase() === 'x' ? new Bot(difficulty, 1) : null
            },
            1: {
                name: starting_player.toLowerCase() === 'x' ? 'O' : 'X',
                symbol: starting_player.toLowerCase() === 'x' ? SYMBOLS['o'] : SYMBOLS['x'],
                value: -1,
                isBot: difficulty && starting_player.toLowerCase() !== 'x',
                bot: difficulty && starting_player.toLowerCase() !== 'x' ? new Bot(difficulty, -1) : null
            }
        }
    }

    generateBoard = (size) => {
        this.#board = new Array(size).fill(null).map(() => new Array(size).fill(0));
        this.#board_element = document.createElement("table");
        this.#board_element.classList.add("board");
        this.#game_element.appendChild(this.#board_element);

        for(let i = 0; i < size; i++) {
            const row = document.createElement("tr");
            for(let j = 0; j < size; j++) {
                const cell = document.createElement("td");
                const div = document.createElement("div");

                div.classList.add("cell");
                div.style.fontSize = `${150 + (10 - size)*20}%`
                div.setAttribute("row", i.toString());
                div.setAttribute("col", j.toString());
                div.addEventListener("click", this.playerMove);

                cell.appendChild(div);
                row.appendChild(cell);
            }
            this.#board_element.appendChild(row);
        }
    };

    start = () => {
        this.turn();
    };

    turn = () => {
        this.#turn_text.classList.remove(...Object.values(SYMBOLS));
        this.#turn_text.classList.add(this.#players[this.#player_turn].symbol);

        if(this.#players[this.#player_turn].isBot) {
            this.lockBoard(true);
            this.botMove();
        }
    }

    lockBoard = (lock) => {
        if(lock) this.#board_element.classList.add("locked");
        else this.#board_element.classList.remove("locked");
    }

    playerMove = (event) => {
        const cell = event.target;
        const row = parseInt(cell.getAttribute("row"));
        const col = parseInt(cell.getAttribute("col"));

        if(this.#board[row][col] !== 0) return;

        this.#board[row][col] = this.#players[this.#player_turn].value;
        cell.innerHTML = `<i class='ti ${this.#players[this.#player_turn].symbol}'></i>`;
        cell.removeEventListener("click", this.playerMove);

        this.updateWeights(row, col);

        this.#free_cells--;
        if(this.checkWin()) return;

        this.#player_turn = (this.#player_turn + 1) % 2;
        this.turn();
    };

    botMove = async () => {
        const bot = this.#players[this.#player_turn].bot;

        this.toggleBotThinking(true);
        const [row, col] = await bot.move(this.#board, this.#free_cells, this.#weights);
        this.toggleBotThinking(false);

        const cell = this.#board_element.querySelector(`div[row='${row}'][col='${col}']`);
        this.#board[row][col] = this.#players[this.#player_turn].value;
        cell.innerHTML = `<i class='ti ${this.#players[this.#player_turn].symbol}'></i>`;
        cell.removeEventListener("click", this.playerMove);

        this.updateWeights(row, col);

        this.#free_cells--;
        if (this.checkWin()) return;

        this.#player_turn = (this.#player_turn + 1) % 2;
        this.turn();
        this.lockBoard(false);
    }

    updateWeights = (row, col) => {
        const val = this.#players[this.#player_turn].value;
        this.#weights.rows[row] += val;
        this.#weights.cols[col] += val;
        if(row === col) this.#weights.diag1 += val;
        if(row + col === this.#board_size - 1) this.#weights.diag2 += val;
    }

    checkWin = () => {
        const p1_w = this.#players[0].value * this.#board_size;
        const p2_w = this.#players[1].value * this.#board_size;

        for(const w_row of this.#weights.rows) {
            if(w_row === p1_w) return this.endGame(WinState.Player1);
            if(w_row === p2_w) return this.endGame(WinState.Player2);
        }
        for(const w_col of this.#weights.cols) {
            if(w_col === p1_w) return this.endGame(WinState.Player1);
            if(w_col === p2_w) return this.endGame(WinState.Player2);
        }
        if(this.#weights.diag1 === p1_w || this.#weights.diag2 === p1_w) return this.endGame(WinState.Player1);
        if(this.#weights.diag1 === p2_w || this.#weights.diag2 === p2_w) return this.endGame(WinState.Player2);

        if(this.#free_cells === 0) return this.endGame(WinState.Draw);

        return false;
    };

    endGame = (winner) => {
        const game_over_text = this.#game_over_screen.querySelector('.game-over-text');

        if(winner === WinState.Draw) game_over_text.innerHTML = getTranslation('gameTie');
        else game_over_text.innerHTML = getTranslation('gameWin').replace("{player}", `<i class='ti ${this.#players[winner].symbol}'></i>`);

        this.#game_over_screen.classList.remove('hide');

        return true;
    }

    toggleBotThinking = (thinking) => {
        const bot_thinking_text = this.#game_element.querySelector('.bot-thinking-text');
        if(thinking) bot_thinking_text.classList.remove('invisible');
        else bot_thinking_text.classList.add('invisible');
    }

    static startLocalPvP() {
        const game_element = document.querySelector('.local-pvp .game');
        const game_over_element = document.querySelector('.local-pvp .game-over-screen');
        const settings = document.forms['local-pvp-settings'];
        const size = parseInt(settings['size'].value);
        const starting_player = settings.querySelector('.starting-player-selector .option.active').getAttribute('val');

        if(size < 3 || size > 10) {
            showMessage("error", getTranslation('invalidSize'));
            return;
        }

        settings.classList.add('hide');
        game_element.classList.remove('hide');

        const game = new Game(game_element, game_over_element, size, starting_player);
        game.start();
    };

    static startVsBot() {
        const game_element = document.querySelector('.vs-bot .game');
        const game_over_element = document.querySelector('.vs-bot .game-over-screen');
        const settings = document.forms['vs-bot-settings'];
        const difficulty = settings.querySelector('.bot-difficulty-selector .option.active').getAttribute('val');
        const starting_player = settings.querySelector('.starting-player-selector .option.active').getAttribute('val');

        settings.classList.add('hide');
        game_element.classList.remove('hide');

        const game = new Game(game_element, game_over_element, 3, starting_player, difficulty);
        game.start();
    }
}

window.startGame = () => {
    const game_mode = mode_selector.querySelector('.game-mode.active').getAttribute('val');

    switch(game_mode) {
        case 'local_pvp':
            Game.startLocalPvP();
            break;
        case 'vs_bot':
            Game.startVsBot();
            break;
    }
};

window.restartGame = (game_mode) => {
    const game_element = document.querySelector(`.${game_mode} .game`);
    const game_over_element = document.querySelector(`.${game_mode} .game-over-screen`);
    const board_element = game_element.querySelector('.board');
    const settings = document.forms[`${game_mode}-settings`];

    settings.classList.remove('hide');
    game_element.classList.add('hide');
    game_over_element.classList.add("hide");
    board_element.remove();
}