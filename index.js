let gridWidth = 16;
let gridHeigth = 16;
const grid = document.querySelector(".grid");

function createGrid() {
    const square = document.createElement("div");
    square.classList = "square";
    grid.appendChild(square);
    for (let i = 1; i < gridHeigth; i++) {
        for (let j = 1; j < gridWidth; j++) {
            grid.appendChild(square.cloneNode(true))
        };
    };
};

createGrid();