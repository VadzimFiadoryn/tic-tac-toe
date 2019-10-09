class TicTacToe {
    constructor(char, field) {
        this.char = "x";
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]

        ];
    }

    getCurrentPlayerSymbol() {
        return this.char;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.char;
            if (this.char === "x") {
                this.char = "o";
            } else {
                this.char = "x";
            }
        }
    }

    isFinished() {
        if ((this.getWinner() === null && this.noMoreTurns()) || this.getWinner() === "x" || this.getWinner() === "o") {
            return true;
        }
        return false;
    }

    getWinner() {
        let element = "x";
        if (
            (this.field[0][0] === element && this.field[0][1] === element && this.field[0][2] === element) ||
            (this.field[1][0] === element && this.field[1][1] === element && this.field[1][2] === element) ||
            (this.field[2][0] === element && this.field[2][1] === element && this.field[2][2] === element) ||
            //////
            (this.field[0][0] === element && this.field[1][0] === element && this.field[2][0] === element) ||
            (this.field[0][1] === element && this.field[1][1] === element && this.field[2][1] === element) ||
            (this.field[0][2] === element && this.field[1][2] === element && this.field[2][2] === element) ||
            //////
            (this.field[0][0] === element && this.field[1][1] === element && this.field[2][2] === element) ||
            (this.field[0][2] === element && this.field[1][1] === element && this.field[2][0] === element)
        ) {
            return element;
        }
        element = "o";
        if (
            (this.field[0][0] === element && this.field[0][1] === element && this.field[0][2] === element) ||
            (this.field[1][0] === element && this.field[1][1] === element && this.field[1][2] === element) ||
            (this.field[2][0] === element && this.field[2][1] === element && this.field[2][2] === element) ||
            //////
            (this.field[0][0] === element && this.field[1][0] === element && this.field[2][0] === element) ||
            (this.field[0][1] === element && this.field[1][1] === element && this.field[2][1] === element) ||
            (this.field[0][2] === element && this.field[1][2] === element && this.field[2][2] === element) ||
            //////
            (this.field[0][0] === element && this.field[1][1] === element && this.field[2][2] === element) ||
            (this.field[0][2] === element && this.field[1][1] === element && this.field[2][0] === element)
        ) {
            return element;
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (this.field[i][j] === null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;