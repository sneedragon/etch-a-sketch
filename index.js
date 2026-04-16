let gridWidth = 16;
let gridHeigth = 16;
const grid = document.querySelector(".grid");

function createGrid() {
    const gridRow = document.createElement("div");
    gridRow.classList = "grid-row";

    const square = document.createElement("div");
    square.classList = "square";
    gridRow.appendChild(square);

    for (let i = 0; i < gridWidth; i++) {
        gridRow.appendChild(square.cloneNode(true));
    }
    
    for (let i = 0; i < gridHeigth; i++) {
        grid.appendChild(gridRow.cloneNode(true));
    }
}
createGrid();