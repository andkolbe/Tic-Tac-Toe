let player = true;
let moveCount = 0;

let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};

function cellClicked(event) {

    if (player) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
    player = !player;

    const xWins = (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X'
        || cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X'
        || cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X'
        || cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X'
        || cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X'
        || cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X'
        || cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X'
        || cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X');

    const oWins = (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O'
        || cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O'
        || cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O'
        || cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O'
        || cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O'
        || cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O'
        || cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O'
        || cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O');

    if (xWins) {
        document.getElementById('winner').innerHTML = 'X Wins!';
    } if (oWins) {
        document.getElementById('winner').innerHTML = 'O Wins!';
    }

    if (xWins && event.target.textContent === 'O') {
        reload();
    } if (oWins && event.target.textContent === 'X') {
        reload();
    }

    moveCount++;
    if (moveCount === 9) {
        document.getElementById('winner').innerHTML = ('No One Wins!');
    } else if (moveCount === 10) {
        reload();
    }

    function reload() {
        location.reload();
    }

};






 