const container = document.querySelector("#container");
const button = document.querySelector("#button");

const gridBtn = document.createElement("button");
gridBtn.textContent = "Change grid size!"
gridBtn.classList.toggle("gridBtn");
button.appendChild(gridBtn);

function grid (container) {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const squares = document.createElement("div");
            squares.classList.toggle("squares")
            container.appendChild(squares);
        }
    }

    const allSquares = document.querySelectorAll(".squares");
    allSquares.forEach((square) => 
        square.addEventListener("mouseenter", () => 
            square.style.backgroundColor = "black"));

    Sizing = String((Math.sqrt((464*464)/(16*16))-2)+ "px");
    allSquares.forEach((square) => square.style.height = Sizing);
    allSquares.forEach((square) => square.style.width = Sizing);
    
}

function changeGrid (size) {

    numSize = Number(size);
    
    const severalSquares = document.querySelectorAll(".squares");
    severalSquares.forEach((square) => container.removeChild(square));

    if (numSize <= 100 && numSize > 0) {
        for (i = 0; i < numSize; i++) {
            for (j = 0; j < numSize; j++) {
                const squares = document.createElement("div");
                squares.classList.toggle("squares")
                container.appendChild(squares);
            }
        }  
    }
    else {
        alert("Error: enter a number between 1 and 100");
        grid(container);
    }

    const allSquares = document.querySelectorAll(".squares");
    allSquares.forEach((square) => 
        square.addEventListener("mouseenter", () => 
            square.style.backgroundColor = "black"));
    
    if (numSize <= 100 && numSize > 0) {    
        Sizing = String((Math.sqrt((464*464)/(numSize*numSize))-2)+ "px");
        allSquares.forEach((square) => square.style.height = Sizing);
        allSquares.forEach((square) => square.style.width = Sizing);
    }
}


gridBtn.addEventListener("click", () => changeGrid(prompt("Enter a number between 1 and 100")))

grid(container);
