class Grid {
    constructor() {
        this.cells = new Array();
        for (let i = 0; i < 9; i++) {
            let htmlCell = document.getElementById("cell" + (i + 1));
            let cell = new Cell(this, i, htmlCell);
            this.cells.push(cell);
        }
    }
}
class Cell {
    constructor(grid, index, htmlElement) {
        this.grid = grid;
        this.index = index;
        this.content = CellContent.Empty;
        this.htmlElement = htmlElement;
        this.htmlElement.onclick = () => {
            this.HandleClick();
        };
    }
    HandleClick() {
        if (turn === Turn.Player1) {
            if (this.content == CellContent.Empty) {
                this.htmlElement.innerHTML = "O";
                this.content = CellContent.Circle;
                SwitchTurn(turn);
            }
        }
        else {
            if (this.content == CellContent.Empty) {
                this.htmlElement.innerHTML = "X";
                this.content = CellContent.Cross;
                SwitchTurn(turn);
            }
        }
    }
}
var CellContent;
(function (CellContent) {
    CellContent[CellContent["Empty"] = 1] = "Empty";
    CellContent[CellContent["Cross"] = 2] = "Cross";
    CellContent[CellContent["Circle"] = 4] = "Circle";
})(CellContent || (CellContent = {}));
var Turn;
(function (Turn) {
    Turn[Turn["Player1"] = 0] = "Player1";
    Turn[Turn["Player2"] = 1] = "Player2";
})(Turn || (Turn = {}));
let turn = Turn.Player1;
window.onload = () => {
    const grid = new Grid();
};
function SwitchTurn(currentTurn) {
    if (currentTurn === Turn.Player1)
        turn = Turn.Player2;
    else
        turn = Turn.Player1;
}
//# sourceMappingURL=index.js.map