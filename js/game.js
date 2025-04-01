import { Bot } from './bot.js';
import { abs, sign, min, max, getTranslation, showMessage } from "./util.js";

const WinState = {
    Player1: 0,
    Player2: 1,
    Draw: -1,
    None: -2
};

const Win = {
    ROW: 0,
    COL: 1,
    DIAG1: 2,
    DIAG2: 3
};

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
                bot: difficulty && starting_player.toLowerCase() === 'x' ? new Bot(difficulty, 1) : null,
            },
            1: {
                name: starting_player.toLowerCase() === 'x' ? 'O' : 'X',
                symbol: starting_player.toLowerCase() === 'x' ? SYMBOLS['o'] : SYMBOLS['x'],
                value: -1,
                isBot: difficulty && starting_player.toLowerCase() !== 'x',
                bot: difficulty && starting_player.toLowerCase() !== 'x' ? new Bot(difficulty, -1) : null,
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
    };

    lockBoard = (lock) => {
        if(lock) this.#board_element.classList.add("locked");
        else this.#board_element.classList.remove("locked");
    };

    playerMove = (event) => {
        const cell = event.target;
        const row = parseInt(cell.getAttribute("row"));
        const col = parseInt(cell.getAttribute("col"));
        const player = this.#players[this.#player_turn];

        if(this.#board[row][col] !== 0) return;

        this.#board[row][col] = player.value;
        cell.innerHTML = `<i class='ti ${player.symbol}'></i>`;
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

        this.#free_cells--;
        if (this.checkWin(row, col)) return;

        this.#player_turn = (this.#player_turn + 1) % 2;
        this.turn();
        this.lockBoard(false);
    };

    updateWeights = (row, col) => {
        const val = this.#players[this.#player_turn].value;
        this.#weights.rows[row] += val;
        this.#weights.cols[col] += val;
        if(row === col) this.#weights.diag1 += val;
        if(row + col === this.#board_size - 1) this.#weights.diag2 += val;
    };

    determineWinner = (row, col) => {
        const p1_v = this.#players[0].value;
        const p2_v = this.#players[1].value;
        const control_sum = this.#board_size - this.#WINNING_SCORE;
        let first_cell;

        first_cell = [row, 0];
        let r_sum = this.#board[row][0];
        for(let c = 1; c < this.#board_size; c++) {
            const val = this.#board[row][c];
            if(val === -sign(r_sum)) {
                r_sum = val;
                first_cell = [row, c];
            } else r_sum += val;
        }
        if(r_sum === p1_v * this.#WINNING_SCORE) return [WinState.Player1, Win.ROW, first_cell[0], first_cell[1]];
        if(r_sum === p2_v * this.#WINNING_SCORE) return [WinState.Player2, Win.ROW, first_cell[0], first_cell[1]];

        first_cell = [0, col];
        let c_sum = this.#board[0][col];
        for(let r = 1; r < this.#board_size; r++) {
            const val = this.#board[r][col];
            if(val === -sign(c_sum)) {
                c_sum = val;
                first_cell = [r, col];
            } else c_sum += val;
        }
        if(c_sum === p1_v * this.#WINNING_SCORE) return [WinState.Player1, Win.COL, first_cell[0], first_cell[1]];
        if(c_sum === p2_v * this.#WINNING_SCORE) return [WinState.Player2, Win.COL, first_cell[0], first_cell[1]];

        if(abs(row - col) <= control_sum) {
            const start_row = max(0, row - col);
            const start_col = max(0, col - row);

            first_cell = [start_row, start_col];
            let d1_sum = this.#board[start_row][start_col];
            for(let i = 1; i < this.#board_size - max(start_row, start_col); i++) {
                const val = this.#board[start_row + i][start_col + i];
                if(val === -sign(d1_sum)) d1_sum = val;
                else d1_sum += val;
            }
            if(d1_sum === p1_v * this.#WINNING_SCORE) return [WinState.Player1, Win.DIAG1, first_cell[0], first_cell[1]];
            if(d1_sum === p2_v * this.#WINNING_SCORE) return [WinState.Player2, Win.DIAG1, first_cell[0], first_cell[1]];
        }

        if(abs(this.#board_size - row - col - 1) <= control_sum) {
            const start_row = max(0, row + col + 1 - this.#board_size);
            const start_col = min(this.#board_size - 1,  row + col);

            first_cell = [start_row, start_col];
            let d2_sum = this.#board[start_row][start_col];
            for(let i = 1; i < max(start_row, start_col) + 1 - min(start_row, start_col); i++) {
                const val = this.#board[start_row + i][start_col - i];
                if(val === -sign(d2_sum)) d2_sum = val;
                else d2_sum += val;
            }
            if(d2_sum === p1_v * this.#WINNING_SCORE) return [WinState.Player1, Win.DIAG2, first_cell[0], first_cell[1]];
            if(d2_sum === p2_v * this.#WINNING_SCORE) return [WinState.Player2, Win.DIAG2, first_cell[0], first_cell[1]];
        }

        if(this.#free_cells === 0) return [WinState.Draw, null, null, null];

        return [WinState.None, null, null, null];
    };

    checkWin = (row, col) => {
        const winner = this.determineWinner(row, col);
        if(winner[0] !== WinState.None) return this.endGame(winner);

        return false;
    };

    endGame = (winner) => {
        this.lockBoard(true);

        const game_over_text = this.#game_over_screen.querySelector('.game-over-text');

        if(winner[0] === WinState.Draw) game_over_text.innerHTML = getTranslation('gameTie');
        else {
            const [win_state, win_type, win_row, win_col] = winner;
            game_over_text.innerHTML = getTranslation('gameWin').replace("{player}", `<i class='ti ${this.#players[win_state].symbol}'></i>`);

            const cell = this.#board_element.querySelector(`.cell[row='${win_row}'][col='${win_col}']`);
            const win_overlay = document.createElement("div");
            win_overlay.classList.add("win-overlay");
            win_overlay.style.setProperty("--length", `${this.#WINNING_SCORE*100}%`);

            const line = document.createElement("div");
            line.classList.add("line");

            switch(win_type) {
                case Win.ROW:
                    win_overlay.classList.add("win-row")
                    break;
                case Win.COL:
                    win_overlay.classList.add("win-col")
                    break;
                case Win.DIAG1:
                    win_overlay.classList.add("win-diag1")
                    break;
                case Win.DIAG2:
                    win_overlay.classList.add("win-diag2")
                    break;
            }

            win_overlay.appendChild(line);
            cell.appendChild(win_overlay);
        }

        setTimeout(() => this.#game_over_screen.classList.remove('hide'), 1000);

        return true;
    };

    toggleBotThinking = (thinking) => {
        const bot_thinking_text = this.#game_element.querySelector('.bot-thinking-text');
        if(thinking) bot_thinking_text.classList.remove('invisible');
        else bot_thinking_text.classList.add('invisible');
    };

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
    };
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