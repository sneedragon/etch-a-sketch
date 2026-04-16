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
};

function parseColor(string) {

    let colorArr = string.slice(4, -1).split(",");
    return colorArr;
};

function darkenSquare(colors) {
    //TODO: lower values and modify
}

grid.addEventListener("mouseover", (event) => {
    let target = event.target;
    //TODO: check if class = square
    //darkenSquare(parseColor(getComputedStyle(target.backgroundColor)))
    //parseColor(getComputedStyle(target).backgroundColor);
});


createGrid();