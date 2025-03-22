import { random, showMessage, getTranslation, API_URL } from "./util.js";

export class Bot {
    #AI_SYSTEM_INSTRUCTIONS; #AI_GENERATION_CONFIG;
    #MINIMAX_CACHE;

    constructor(difficulty, value) {
        this.difficulty = difficulty;
        this.value = value;

        if (this.difficulty === 'impossible') {
            this.#loadCache();
        }
    }

    #loadCache = async () => {
        this.#MINIMAX_CACHE = await fetch('./cache.json').then(response => response.json()) || {};
    }

    move = async (board, free_cells, weights) => {
        switch (this.difficulty) {
            case 'easy':
                return this.#easy_move(board, free_cells);
            case 'medium':
                return this.#medium_move(board, free_cells, weights);
            case 'impossible':
                return this.#minimax_move(board);
            case 'ai':
                return await this.#ai_move(board, free_cells, weights);
        }
    }

    #easy_move = (board, free_cells, size = 3) => {
        const index = random(0, free_cells - 1);

        let i = 0, n = 0;
        let curr_row, curr_col;
        while(n <= index) {
            if(board[Math.floor(i / size)][i % 3] === 0) {
                curr_row = Math.floor(i / size);
                curr_col = i % 3;
                n++;
            }
            i++;
        }

        return [curr_row, curr_col];
    }

    #medium_move = (board, free_cells, weights, size = 3) => {
        // Attempt to win
        for(let i = 0; i < weights.rows.length; i++) {
            if(weights.rows[i] === this.value * (size - 1))
                for(let j = 0; j < size; j++) if(board[i][j] === 0) return [i, j];
        }

        for(let i = 0; i < weights.cols.length; i++) {
            if(weights.cols[i] === this.value * (size - 1))
                for(let j = 0; j < size; j++) if(board[j][i] === 0) return [j, i];
        }

        if(weights.diag1 === this.value * (size - 1))
            for(let i = 0; i < size; i++) if(board[i][i] === 0) return [i, i];

        if(weights.diag2 === this.value * (size - 1))
            for(let i = 0; i < size; i++) if(board[i][size - i - 1] === 0) return [i, size - i - 1];


        // Attempt to block
        for(let i = 0; i < weights.rows.length; i++) {
            if(weights.rows[i] === -this.value * (size - 1))
                for(let j = 0; j < size; j++) if(board[i][j] === 0) return [i, j];
        }

        for(let i = 0; i < weights.cols.length; i++) {
            if(weights.cols[i] === -this.value * (size - 1))
                for(let j = 0; j < size; j++) if(board[j][i] === 0) return [j, i];
        }

        if(weights.diag1 === -this.value * (size - 1))
            for(let i = 0; i < size; i++) if(board[i][i] === 0) return [i, i];

        if(weights.diag2 === -this.value * (size - 1))
            for(let i = 0; i < size; i++) if(board[i][size - i - 1] === 0) return [i, size - i - 1];

        return this.#easy_move(board, free_cells, size);
    }

    #ai_move = async (board, free_cells, weights) => {
        const url = `${API_URL}/ai/get-move`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board: board,
                    value: this.value
                })
            });

            const move = await response.json();
            const [row, col] = [move.row, move.col];

            if(board[row][col] !== 0) return this.#medium_move(board, free_cells, weights);

            return [row, col];
        } catch(error) {
            showMessage('error', getTranslation('aiMoveError'));
            return this.#medium_move(board, free_cells, weights);
        }
    }

    #minimax_move = (board) => {
        let bestMove = [null, null];
        let bestScore = -Infinity;

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === 0) {
                    board[i][j] = this.value;
                    const score = this.#minimax(board, 0, false, -Infinity, Infinity);
                    board[i][j] = 0;

                    if(score > bestScore) {
                        bestScore = score;
                        bestMove = [i, j];
                    }
                }
            }
        }

        return bestMove;
    }

    #minimax = (board, depth, isMaximizing, alpha, beta) => {
        const winner = this.#determineWinner(board);

        if(winner !== 0) return (winner === this.value ? 10 - depth : depth - 10);
        if(this.#isBoardFull(board)) return 0;

        let bestScore = isMaximizing ? -Infinity : Infinity;
        rows: for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === 0) {
                    board[i][j] = isMaximizing ? this.value : -this.value;
                    const score = this.#minimax(board, depth + 1, !isMaximizing, alpha, beta);
                    board[i][j] = 0;

                    if(isMaximizing) alpha = Math.max(alpha, score);
                    else beta = Math.min(beta, score);

                    bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
                    if(beta <= alpha) break rows;
                }
            }
        }

        return bestScore;
    }

    #determineWinner = (board) => {
        // Rows
        for(let i = 0; i < board.length; i++) {
            if(board[i].every(cell => cell === this.value)) return this.value;
            if(board[i].every(cell => cell === -this.value)) return -this.value;
            // if(Math.abs(board[i].reduce((a, b) => a + b, 0)) === 3) return board[i][0];
        }

        // Columns
        for(let i = 0; i < board[0].length; i++) {
            if(board.every(row => row[i] === this.value)) return this.value;
            if(board.every(row => row[i] === -this.value)) return -this.value;
        }

        // Diagonals
        if(board.every((row, i) => row[i] === this.value)) return this.value;
        if(board.every((row, i) => row[i] === -this.value)) return -this.value;

        if(board.every((row, i) => row[row.length - i - 1] === this.value)) return this.value;
        if(board.every((row, i) => row[row.length - i - 1] === -this.value)) return -this.value;

        return 0;
    }

    #isBoardFull = (board) => !board.flat().includes(0);
}
