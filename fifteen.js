var puzzeModule = (function ()  {
    var nRow = 0;
    var nPieces = 0;
    const COLS = 4;
    const MAX = 9999;
    const TIME_OUT = 1500;
    var autoPlayStatus = false;
    const MOVE = [{i: 0, j: 1}, {i: -1, j: 0}, {i: 0, j: -1}, {i: 1, j: 0}];
    var emptySquarePosition = 15;
    const NUM_STEPS = 50;
    const TILE_SIZE = 100;
    let arrMoveStatus = [];
    let message = "Congradulation!!! You win the game";
    /////////////////////////////////////////////////////////////
    $(document).ready(function () {
        jInit();
    });
    /////////////////////////////////////////////////////////////
    function jInit () {
        $("#puzzlearea div").each(function (index) {
            initPuzze(this, index);
            nPieces++;
        });
        $("#shufflebutton").click(shuffle);
    }
 function getBoxIndex (piece) {
        let left = $(piece).css('left');
        let top = $(piece).css('top');
        let x = parseInt(left);
        let y = parseInt(top);
        let col = Math.floor(x / TILE_SIZE);
        let row = Math.floor(y / TILE_SIZE);
        return row * COLS + col;
    }
    /////////////////////////////////////////////////////////////
function getBoxPosition (i) {
        return {x: ((i % COLS) * TILE_SIZE), y: (Math.floor(i / COLS) * TILE_SIZE)};
    };
    /////////////////////////////////////////////////////////////
 function move (piece, newPosition) {
        //get current position of piece
        let currentPosition = getBoxIndex(piece);
        //check if this piece can move to empty square position
        if (checkMove(currentPosition, emptySquarePosition) === false) return false;
        //Tracking
        if (autoPlayStatus === false) {
            let moveStatus = new MoveStatus(piece, currentPosition, newPosition);
            arrMoveStatus.push(moveStatus);
        }
        //store current position to emptySquarePosition
        emptySquarePosition = currentPosition;
        console.log(emptySquarePosition);
        //move to new position
        setPosition(piece, newPosition);
    };
    /////////////////////////////////////////////////////////////
 function showMessage (msg) {
        $("#status").text(msg).css('color', 'red');
    };
    /////////////////////////////////////////////////////////////

    function cellIndex (position) {
        let c = {};
        c.i = position % COLS;
        c.j = Math.floor(position / COLS);
        return c;
    };
    /////////////////////////////////////////////////////////////
   function checkMove (currentPosition, newPosition) {
        let c1 = cellIndex(currentPosition);
        let c2 = cellIndex(newPosition);
        let d = Math.abs(c1.i - c2.i) + Math.abs(c1.j - c2.j);
        return d === 1;
    };
    /////////////////////////////////////////////////////////////
 function setPosition (piece, i) {
        let box = getBoxPosition(i);
        let left = box.x + 'px';
        let top = box.y + 'px';
        $(piece).css({'left': left, 'top': top});
    };
    /////////////////////////////////////////////////////////////
    function initPuzze (piece, i) {
        let box = getBoxPosition(i);
        let position = -box.x + 'px ' + (-box.y) + 'px';
        //boxesPosition.push(box);
        $(piece).addClass("puzzlepiece");
        setPosition(piece, i);
        $(piece).css({'backgroundImage':'../background.jpg', 'backgroundPosition': position});
        //add event handler
        $(piece).click(tileClick);

    };
    /////////////////////////////////////////////////////////////
 function tileClick () {
        move (this, emptySquarePosition);
        if (checkWin() === true)
            showMessage(message);
    };
    /////////////////////////////////////////////////////////////
   function shuffle () {
        reset();
        for (let i = 0; i < NUM_STEPS; i++)
            randomMoveClick();
        console.log(arrMoveStatus);

    };
    /////////////////////////////////////////////////////////////
    function reset() {
        emptySquarePosition = 15;
        arrMoveStatus = [];
        showMessage("");
        let arr = [];
        for (let i = 0; i < emptySquarePosition; i++)
            arr[i] = i;
        drawPuzzle(arr);
    };
    /////////////////////////////////////////////////////////////
    function drawPuzzle (arr) {
        $("#puzzlearea div").each(function (index) {
            setPosition(this, arr[index]);
        });
        console.log(arr);
    };

   function randomMove(max) {
        let my_num = Math.floor(Math.random() * max);
        return my_num % 4;

    };
    /////////////////////////////////////////////////////////////
    function randomMoveClick () {
        let canMove = false;
        showMessage("");
        let nRows = Math.floor(nPieces / COLS) + 1;
        let emmtyCell = cellIndex(emptySquarePosition);
        let cellWillMove = {};
        let my_num = null;
        do {
            my_num = randomMove(MAX);
            cellWillMove.i = emmtyCell.i + MOVE[my_num].i;
            cellWillMove.j = emmtyCell.j + MOVE[my_num].j;
            if (cellWillMove.i >= 0 && cellWillMove.i < COLS) {
                if (cellWillMove.j >= 0 && cellWillMove.j < nRows) {
                    canMove = true;
                }
            }
        } while (canMove === false);
        let position = cellWillMove.j * COLS + cellWillMove.i;
        let piece = getPieceByPosition(position);
        move(piece, emptySquarePosition);
    };
    /////////////////////////////////////////////////////////////
   function getPieceByPosition (position) {
        $("#puzzlearea div").each(function (index, value) {
            if (position === getBoxIndex(this)) {
                console.log("index=" + index);
                move(value, emptySquarePosition);
                console.log("new=" + emptySquarePosition);
                return this;
            }

        });
    };
    /////////////////////////////////////////////////////////////
       function MoveStatus (piece, oldPosition, newPosition) {
        this.piece = piece;
        this.oldPosition = oldPosition;
        this.newPosition = newPosition;
    };
    /////////////////////////////////////////////////////////////
 function checkWin () {
        let res = true;
        $("#puzzlearea div").each(function (index, value) {
            console.log("index = " + index);
            console.log("box index= " + getBoxIndex(this));
            if (index !== getBoxIndex(this)) {
                console.log("false");
                res = false;
            }
        });
        return res;
    };
})();
