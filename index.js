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

function darkenSquare(colorArr) {
    for (let i = 0; i < colorArr.length; i++) {
        colorArr[i] = Math.max(10, Math.floor(colorArr[i] / 1.1));
    }
    let newColor = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`
    return newColor;
}

grid.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className != "square") {
        return;
    }
    //darkenSquare(parseColor(getComputedStyle(target).backgroundColor));
    //for debug: parseColor(getComputedStyle(target).backgroundColor);
});


createGrid();