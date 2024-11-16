const gameBoard = document.getElementById('game-board');

// Game settings
const rows = 10;
const cols = 10;
const mines = 15;

// Create the game board
const board = [];
for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push({ mine: false, revealed: false });
    }
    board.push(row);
}

// Place mines
for (let i = 0; i < mines; i++) {
    let r, c;
    do {
        r = Math.floor(Math.random() * rows);
        c = Math.floor(Math.random() * cols);
    } while (board[r][c].mine);
    board[r][c].mine = true;
}

// Render the game board
function renderBoard() {
    gameBoard.innerHTML = '';
    board.forEach((row, r) => {
        row.forEach((cell, c) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            if (cell.revealed) {
                div.textContent = cell.mine ? '💣' : '';
                div.classList.add(cell.mine ? 'mine' : 'safe');
            }
            div.addEventListener('click', () => revealCell(r, c));
            gameBoard.appendChild(div);
        });
    });
}

// Reveal a cell
function revealCell(r, c) {
    if (board[r][c].revealed) return;
    board[r][c].revealed = true;
    if (!board[r][c].mine) {
        // Optional: Reveal neighboring cells if no nearby mines
    }
    renderBoard();
}

renderBoard();
