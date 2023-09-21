


var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');


jQueryScript.onload = function () {
    //$(document).ready(function () {
    //    console.log("jQuery is working!");
    //});
    var currentPlayer = "X";
    var gameOver = false;


    //restart
    function restartGame() {
        $(".cell").text("");
        $(".cell").removeClass("occupied");

        currentPlayer = "X";
        gameOver = false;
        $("#message").text("Player " + currentPlayer + "'s Turn");
    }

    $("#restart-button").click(function () {
        restartGame();
    });



    $(".cell").click(function () {
        if (!gameOver && $(this).text() === "") {
            $(this).text(currentPlayer);
            $(this).addClass("occupied");

            if (checkForWinner()) {
                gameOver = true;
                $("#message").text("Player " + currentPlayer + " wins!");
                $("#button").click();
            } else if ($(".cell.occupied").length === 9) {
                gameOver = true;
                $("#message").text("It's a draw!");
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                $("#message").text("Player " + currentPlayer + "'s Turn");
            }
        }
    });

    function getCellValue(row, col) {
        return $("#cell-" + row + "-" + col).text();
    }

    function checkForWinner() {
        let winner = null;
        let getCell1 = null;
        let getCell2 = null;
        let getCell3 = null;

        //horizontal
        for (let i = 0; i < 3; i++) {
            getCell1 = getCellValue(i, 0);
            getCell2 = getCellValue(i, 1);
            getCell3 = getCellValue(i, 2);
            if (getCell1 === getCell2 && getCell1 === getCell3 && getCell1 !== "") {
                winner = getCell1;
            }
        }

        //vertical
        for (let i = 0; i < 3; i++) {
            getCell1 = getCellValue(0, i);
            getCell2 = getCellValue(1, i);
            getCell3 = getCellValue(2, i);
            if (getCell1 === getCell2 && getCell1 === getCell3 && getCell1 !== "") {
                winner = getCell1;
            }
        }

        //diagonals
        getCell1 = getCellValue(0, 0);
        getCell2 = getCellValue(1, 1);
        getCell3 = getCellValue(2, 2);
        if (getCell1 === getCell2 && getCell1 === getCell3 && getCell1 !== "") {
            winner = getCell1;
        }

        getCell1 = getCellValue(2, 0);
        getCell2 = getCellValue(1, 1);
        getCell3 = getCellValue(0, 2);
        if (getCell1 === getCell2 && getCell1 === getCell3 && getCell1 !== "") {
            winner = getCell1;
        }

        if (winner) {
            return true;
        }

        return false;
    }


};

document.head.appendChild(jQueryScript);