const body = document.querySelector("body")
const grid = document.querySelector(".grid");
let mouseDown = false;

function createGrid(gridHeigth, gridWidth) {
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

function deleteGrid() {
    for (child of grid.children) {
        grid.removeChild(child)
    }
};

function parseColor(string) {
    let colorArr = string.slice(4, -1).split(",");
    return colorArr;
};

function getDarkerColors(colorArr) {
    for (let i = 0; i < colorArr.length; i++) {
        colorArr[i] = Math.max(10, Math.floor(colorArr[i] / 2));
    }
    let newColor = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]})`
    return newColor;
}

function paint(target) {
    target.style.backgroundColor = getDarkerColors(parseColor(getComputedStyle(target).backgroundColor));
}

//Painting---------------------------------------------
grid.addEventListener("mouseover", (event) => {

    let target = event.target;
    if (target.className != "square") {
        return;
    };
    if (mouseDown) {
        paint(target);
    };   
});

grid.addEventListener("mousedown", (event) => {
    event.preventDefault();
    mouseDown = true;
    let target = event.target;
    if (target.className != "square") {
        return;
    }
    paint(target);
});


body.addEventListener("mouseup", (event) => {
    mouseDown = false;
});

//Size-modification-----------------------------------
const sizeInput = document.querySelector("#size-message");

sizeInput.addEventListener("keydown", (event) => {
    if (event.key != "Enter") {
        return;
    };
    let gridWidth = event.target.value;
    let gridHeigth = event.target.value;
    deleteGrid();
    createGrid(gridHeigth, gridWidth);
});

//
createGrid(16, 16);