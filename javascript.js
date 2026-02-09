const container = document.querySelector("#container");

function gridColors (container) {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const squares = document.createElement("div");
            squares.classList.toggle("squares")
            container.appendChild(squares);
        }
    }

    const hover = document.querySelectorAll(".squares");
    hover.forEach((square) => 
        square.addEventListener("mouseenter", () => 
            square.style.backgroundColor = "black"));
    
}

gridColors(container);
