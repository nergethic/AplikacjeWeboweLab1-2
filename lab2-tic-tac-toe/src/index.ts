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
        this.htmlElement.onclick = () => {
            this.HandleClick()
        }
    }

    HandleClick() {
        if (turn === Turn.Player1) {
            if (this.content == CellContent.Empty) {
                this.htmlElement.innerHTML = "O"
                this.content = CellContent.Circle
                SwitchTurn(turn)
            }
        } else {
            if (this.content == CellContent.Empty) {
                this.htmlElement.innerHTML = "X"
                this.content = CellContent.Cross
                SwitchTurn(turn)
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