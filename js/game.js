import { Bot } from './bot.js';
import { abs, sign, getTranslation, showMessage } from "./util.js";

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
    #WINNING_SCORE;

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

        this.#WINNING_SCORE = size === 3 ? 3 : 4;

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
        if(this.checkWin(row, col)) return;

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
        if (this.checkWin(row, col)) return;

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

    checkWin = (row, col) => {
        const p1_v = this.#players[0].value;
        const p2_v = this.#players[1].value;

        let r_sum = this.#board[row][0];
        for(let c = 1; c < this.#board_size; c++) {
            const val = this.#board[row][c];
            if(val === -sign(r_sum)) r_sum = val;
            else r_sum += val;
        }
        if(r_sum === p1_v * this.#WINNING_SCORE) return this.endGame(WinState.Player1);
        if(r_sum === p2_v * this.#WINNING_SCORE) return this.endGame(WinState.Player2);

        let c_sum = this.#board[0][col];
        for(let r = 1; r < this.#board_size; r++) {
            const val = this.#board[r][col];
            if(val === -sign(c_sum)) c_sum = val;
            else c_sum += val;
        }
        if(c_sum === p1_v * this.#WINNING_SCORE) return this.endGame(WinState.Player1);
        if(c_sum === p2_v * this.#WINNING_SCORE) return this.endGame(WinState.Player2);

        if(row === col) {
            let d1_sum = this.#board[0][0];
            for(let i = 1; i < this.#board_size; i++) {
                const val = this.#board[i][i];
                if(val === -sign(d1_sum)) d1_sum = val;
                else d1_sum += val;
            }
            if(d1_sum === p1_v * this.#WINNING_SCORE) return this.endGame(WinState.Player1);
            if(d1_sum === p2_v * this.#WINNING_SCORE) return this.endGame(WinState.Player2);
        }

        if(row + col === this.#board_size - 1) {
            let d2_sum = this.#board[0][this.#board_size - 1];
            for(let i = 1; i < this.#board_size; i++) {
                const val = this.#board[i][this.#board_size - i - 1];
                if(val === -sign(d2_sum)) d2_sum = val;
                else d2_sum += val;
            }
            if(d2_sum === p1_v * this.#WINNING_SCORE) return this.endGame(WinState.Player1);
            if(d2_sum === p2_v * this.#WINNING_SCORE) return this.endGame(WinState.Player2);
        }

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

        if(size < 3 || size > 10 || Number.isNaN(size)) {
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

document.forms['local-pvp-settings'].addEventListener('submit', (event) => {
    event.preventDefault();
    Game.startLocalPvP();
});