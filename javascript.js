// Etch-A-Sketch Interactive Web Page
function makeGrid () {
    const container = document.querySelector("#container");
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const squares = document.createElement("div");
            squares.classList.toggle("squares");
            container.appendChild(squares);
        }
    }
}    

function makeButton () {
    const button = document.querySelector("#button");

    const gridBtn = document.createElement("button");
    gridBtn.textContent = "Change grid size!";
    gridBtn.classList.toggle("gridBtn");
    button.appendChild(gridBtn);

    gridBtn.addEventListener("click", () => changeGrid(prompt("Enter a number between 1 and 100")));
} 

function randomColor(allSquares) {
    allSquares.forEach((square) => 
        square.addEventListener("mouseenter", () => 
            square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)));
}

function varyOpacity(allSquares) {
    allSquares.forEach((square) => square.style.opacity = 0.1);

    allSquares.forEach((square) => 
        square.addEventListener("mouseenter", function () { 
            let currentOpacity = parseFloat(square.style.opacity);
            let newOpacity = currentOpacity + 0.1;
            square.style.opacity = newOpacity;
        }));
}

function grid () {

    makeGrid();

    const allSquares = document.querySelectorAll(".squares");

    randomColor(allSquares);

    Sizing = String((Math.sqrt((600*600)/(16*16))-2)+ "px");
    allSquares.forEach((square) => square.style.height = Sizing);
    allSquares.forEach((square) => square.style.width = Sizing);

    varyOpacity(allSquares);
}

function changeGrid (size) {

    makeGrid();

    numSize = Number(size);

    if (numSize <= 100 && numSize > 0) {
        const severalSquares = document.querySelectorAll(".squares");
        severalSquares.forEach((square) => container.removeChild(square));
        for (i = 0; i < numSize; i++) {
            for (j = 0; j < numSize; j++) {
                const squares = document.createElement("div");
                squares.classList.toggle("squares")
                container.appendChild(squares);
            }
        }  
    } else {
        alert("Error: enter a number between 1 and 100");
        return;
    }

    const allSquares = document.querySelectorAll(".squares");

    randomColor(allSquares);
    
    if (numSize <= 100 && numSize > 0) {    
        Sizing = String((Math.sqrt((600*600)/(numSize*numSize))-2)+ "px");
        allSquares.forEach((square) => square.style.height = Sizing);
        allSquares.forEach((square) => square.style.width = Sizing);
    }

    varyOpacity(allSquares);
}

makeButton();
grid();
