
var gBoard;
var idx = 1;
var isPlay = true;
var size = 0;

function init() {
    var shuffleNumsArr = randomArrayShuffle(numsArr(size));
    gBoard = createBoard(shuffleNumsArr);
    renderBoard(gBoard)
}

function newGame() {
    document.querySelector('h3 span').innerText = null;
    isPlay = true;
    idx = 1;
    if (document.getElementById("16").checked) {
        size = 4;
        init()
    }
    if (document.getElementById("25").checked) {
        size = 5;
        init()
    }
    if (document.getElementById("36").checked) {
        size = 6;
        init()
    }
}

function createBoard(shuffleNumsArr) {
    var board = [];
    var shuffleNumsArrIdx = 0;
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = shuffleNumsArr[shuffleNumsArrIdx];
            shuffleNumsArrIdx++
        }
    }
    return board;
}


function numsArr(size) {
    var numsArray = [];
    for (var i = 0; i < size * size; i++) {
        numsArray[i] = i + 1;
    }
    return numsArray
}

function renderBoard(board) {
    var strHtml = '';
    var elBoard = document.querySelector('.board');

    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            var className = (cell) ? 'occupied' : '';
            strHtml += `<td class="${className}"
            data-i="${i}" data-j="${j}"
            onclick="cellClicked(this,${i},${j})"
            > ${cell} </td>`;
        }
        strHtml += '</tr>'
    }
    elBoard.innerHTML = strHtml;
}

function cellClicked(elCell, cellI, cellJ) {
    if (gBoard[cellI][cellJ] === idx) {
        if (idx === 1) startTimer(new Date)
        if (idx === size * size) isPlay = false;

        // // update the model:
        idx++;
        if (idx <= size * size) {
            document.querySelector('h4 span').innerText = idx;
        } else {
            document.querySelector('h4 span').innerText = null;
        }
        // // update the dom:
        elCell.classList.add('clicked');
    }
}

