class Grid {
    private cells: Cell[];

    constructor() {
        this.cells = new Array();

        for (let i = 0; i < 9; i++) {
            let htmlCell = <HTMLDivElement>document.getElementById("cell" + (i+1))
            let cell = new Cell(this, i, htmlCell);

            this.cells.push(cell);
        }
    }

    CheckWin(): boolean {

        // horizontal check
        for (let i = 0; i < 3; i++) {
            let cell1 = this.cells[i].content
            let cell2 = this.cells[i+3].content
            let cell3 = this.cells[i+6].content

            if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
                return true
            }
        }

        // vertical check
        for (let i = 0; i < 3; i++) {
            let cell1 = this.cells[i*3].content
            let cell2 = this.cells[i+3 + 1].content
            let cell3 = this.cells[i+3 + 2].content

            if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
                return true
            }
        }

        // diagonal check
        let cell1 = this.cells[0].content
        let cell2 = this.cells[4].content
        let cell3 = this.cells[8].content
        if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
            return true
        }

        cell1 = this.cells[3].content
        cell2 = this.cells[4].content
        cell3 = this.cells[6].content
        if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
            return true
        }

        return false
    }
}

class Cell {
    grid: Grid
    index: number
    content: CellContent
    htmlElement: HTMLDivElement

    constructor(grid: Grid, index: number, htmlElement: HTMLDivElement) {
        this.grid = grid
        this.index = index
        this.content = CellContent.Empty

        this.htmlElement = htmlElement;
        this.htmlElement.onclick = () => this.HandleClick();
    }

    HandleClick() {
        if (this.content == CellContent.Empty) {
            if (turn === Turn.Player1) {
                this.htmlElement.innerHTML = "O"
                this.content = CellContent.Circle
            } else {
                this.htmlElement.innerHTML = "X"
                this.content = CellContent.Cross
            }

            SwitchTurn(turn)
            let win = this.grid.CheckWin()
            if (win === true) {
                alert("Winner: " + turn)
            }
        }
    }
}

enum CellContent {
    Empty = 1,
    Cross = 2,
    Circle = 4
}

enum Turn {
    Player1, // circle
    Player2  // cross
}

let turn = Turn.Player1

window.onload = () => {
    const grid = new Grid()
}

function SwitchTurn(currentTurn: Turn) {
    if (currentTurn === Turn.Player1)
        turn = Turn.Player2
    else
        turn = Turn.Player1
}