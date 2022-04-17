// initialize variables
let moves = 0;
let table;
let rows;
let columns;
let tileMoves;
let boardArr;
let bG;

// timer
const timer = document.getElementById('timer');

let hr = 00;
let min = 01;
let sec = 30;
let stoptime = true;


// background buttons, also starts game
function buttonStart() {
    let picture1 = document.getElementById("pic1");
    picture1.addEventListener("click", gameStart, false);

    let picture2 = document.getElementById("pic2");
    picture2.addEventListener("click", gameStart, false);

    let picture3 = document.getElementById("pic3");
    picture3.addEventListener("click", gameStart, false);

    let picture4 = document.getElementById("pic4");
    picture4.addEventListener("click", gameStart, false);

    document.getElementById("winner").innerHTML = " ";
    tileMoves = document.getElementById("moves");
    table = document.getElementById("table");
    rows = 4; // 4x4 board
    columns = 4; // 4x4 board
    checkers = 0;
    gameStart();
}


// starts game by building out arrays and filling them with the images
function gameStart() {
    let numArr = new Array();
    let numUsed;
    let randd = 0;
    let co = 0;
    moves = 0;
    rows = 4;
    columns = 4;
    tileMoves.innerHTML = moves;
    boardArr = new Array(rows);

    // columns
    for (let i = 0; i < rows; i++) {
        boardArr[i] = new Array(columns);
    }

    // moves counted
    numUsed = new Array(rows * columns);
    for (let i = 0; i < rows * columns; i++) {
        numUsed[i] = 0;
    }

    // randomizes board
    for (let i = 0; i < rows * columns; i++) {
        randd = Math.floor(Math.random() * rows * columns);
        if (numUsed[randd] == 0) {
            numUsed[randd] = 1;
            numArr.push(randd);
        } else {
            i--;
        }
    }

    // initializes board
    co = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            boardArr[i][j] = numArr[co];

            co++;
        }
    }

    // background 1 button
    let picture1 = document.getElementById("pic1");
    picture1.addEventListener("click", function () {
        bG = 'style = \"background-image: url(background1.png)\"';
        board(bG);
        startTimer();
    });

    // background 2 button
    let picture2 = document.getElementById("pic2");
    picture2.addEventListener("click", function () {
        bG = 'style = \"background-image: url(background2.png)\"';
        board(bG);
        startTimer();
    });

    // background 3 button
    let picture3 = document.getElementById("pic3");
    picture3.addEventListener("click", function () {
        bG = 'style = \"background-image: url(background3.png)\"';
        board(bG);
        startTimer();
    });

    // background 4 button
    let picture4 = document.getElementById("pic4");
    picture4.addEventListener("click", function () {
        bG = 'style = \"background-image: url(background4.png)\"';
        board(bG);
        startTimer();
    });
}


// checks if tile is movable, alert if not
function movingTile(rRow, cColumn) {
    if (movableCheck(rRow, cColumn, "up") ||
        movableCheck(rRow, cColumn, "down") ||
        movableCheck(rRow, cColumn, "left") ||
        movableCheck(rRow, cColumn, "right")) {
        increment();
    } else {
        alert("Nope! You can't move this");
    }

    // checks if you completed the board, changes image to winner
    if (winnerCheck()) {
        alert("You Won! in: " + moves + " moves.");
        document.getElementById("winner").innerHTML = "Winner Winner!";
        gameStart();
    }
}

// board function, makes each tile movable
function board(bG) {
    let result = "";

    for (let i = 0; i < rows; i++) {
        result += "<tr>";
        for (let j = 0; j < columns; j++) {
            if (boardArr[i][j] == 0) {
                result += "<td class=\"blank\"> </td>";
            }
            if (boardArr[i][j] == 1) {
                result += "<td class=\"tile1\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 2) {
                result += "<td class=\"tile2\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 3) {
                result += "<td class=\"tile3\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 4) {
                result += "<td class=\"tile4\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 5) {
                result += "<td class=\"tile5\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 6) {
                result += "<td class=\"tile6\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 7) {
                result += "<td class=\"tile7\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 8) {
                result += "<td class=\"tile8\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 9) {
                result += "<td class=\"tile9\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 10) {
                result += "<td class=\"tile10\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 11) {
                result += "<td class=\"tile11\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 12) {
                result += "<td class=\"tile12\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 13) {
                result += "<td class=\"tile13\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 14) {
                result += "<td class=\"tile14\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
            if (boardArr[i][j] == 15) {
                result += "<td class=\"tile15\" onclick=\"movingTile(" + i + ", " + j + ")\" " + bG + ">" + boardArr[i][j] + "</td>";
            }
        }
        result += "</tr>";
    }

    table.innerHTML = result;
}


// checks if each tile is movable
function movableCheck(coordRow, coordCol, location) {
    setRow = 0;
    setCol = 0;
    if (location == "up") {
        setRow = -1;
    }
    else if (location == "down") {
        setRow = 1;
    }
    else if (location == "left") {
        setCol = -1;
    }
    else if (location == "right") {
        setCol = 1;
    }

    if (coordRow + setRow >= 0 && coordCol + setCol >= 0 && coordRow + setRow < rows && coordCol + setCol < columns) {
        if (boardArr[coordRow + setRow][coordCol + setCol] == 0) {
            boardArr[coordRow + setRow][coordCol + setCol] = boardArr[coordRow][coordCol];
            boardArr[coordRow][coordCol] = 0;
            board(bG);
            return true;
        }
    }
    return false;
}


// winner check function
function winnerCheck() {
    var co = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (boardArr[i][j] != co) {
                if (!(co === rows * columns && boardArr[i][j] === 0)) {
                    return false;
                }
            }
            co++;
        }
    }

    return true;
}


// moves tile by 1 increment
function increment() {
    moves++;
    if (tileMoves) {
        tileMoves.innerHTML = moves;
    }
}


// starts timer upon any background button click
function startTimer() {
    hr = 00;
    min = 01;
    sec = 30;
    timer.innerHTML = hr + ':' + min + ':' + sec;
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}


// counts down timer
function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        if (sec != 0) {
            sec -= 1;
        }
        else {
            sec = 0;
        }
        reset();

        if (sec == 00) {
            if (min == 00) {
                min = 00
            }
            else {
                min = min - 1;
                sec = 60;
            }
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 2) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}


// resets page if timer reaches 0:00:00
function reset() {
    let temp = 0
    if (hr == 00 && min == 00 && sec == 00) {
        while (temp == 0) {
            temp = temp + 1;
            if (temp == 1) {
                document.write('<a href="index.html"></a>');
                alert("Time's up. Page will refresh now gg.");
                window.location.reload();
            }
        }
    }
}



// loads functions
window.addEventListener("load", buttonStart, false);

