var tiles;
var posY;
var posX;

function setBoard(backgroundimage) {
    var board = document.getElementById('board');
    tiles = board.getElementsByClassName('tile');
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].style.left = (i % 4 * 100) + 'px';
        tiles[i].style.top = (parseInt(i / 4) * 100) + 'px';
        tiles[i].style.backgroundimage = backgroundimage;
        tiles[i].style.backgroundPosition = '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;

        tiles[i].onmouseover = function () {
            if (checkMove(parseInt(this.innerHTML))) {
                this.className = "moveableTile";
            }
        };

        tiles[i].onmouseout = function () {
            this.className = "tile";
        };

        tiles[i].onclick = function () {
            if (checkMove(parseInt(this.innerHTML))) {
                swap(this.innerHTML - 1);
                if (finish()) {
                    window();
                }
                return;
            }
        };
    }
}