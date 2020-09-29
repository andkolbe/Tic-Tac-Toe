let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked (cells) {
    event.target.textContent = 'X';
}

let playerX = true;
function cellClicked() {
    if (playerX) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }

    playerX = !playerX;
}


if (cells[0].cellClicked && cells[1].cellClicked && cells[2].cellClicked) {
    console.log('You Win!');
}

/*
if('click' % 2 !== 0) {
    cellClicked('X');
} else {
    cellClicked('O');
};


//event.target is the cell you've clicked on

// ( condition ) ? "X" : "O";

// true/false. If the click is odd or even

//cells[0].textContent, cells[1].textContent, cells[2].textContent = You Win!

// Hints!
// if else are your friend!
// cell[0].textContent;
// comparison operators ===

*/