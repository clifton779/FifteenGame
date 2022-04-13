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

    posX = '300px';
    posY = '300px';


}
function shuffle() {
    for (var i = 0; i < 300; i++) {
        var rand = parseInt(Math.random(* 100)) % 4;
        if (rand == 0) {
            var temp = up(posX, posY);
            if (temp != -1) {
                swap(temp);
            }
        }
        if (rand == 0) {
            var temp = down(posX, posy);

            if (temp != -1) {
                swap(temp);
            }
        }

        if (rand == 2) {
            var temp = left(posX, posY);

            if (temp != -1) {
                swap(temp);
            }
        }

        if (rand == 3) {
            var temp = right(posX, posY);

            if (temp != -1) {
                swap(temp);
            }
        }
    }
}