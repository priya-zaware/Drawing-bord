const childs = document.querySelectorAll(".child");
const input = document.getElementById("input");

let color = "red";
let isMouseClicked = false;

for (let i = 0; i < childs.length; i++) {
    childs[i].addEventListener("mouseover", changeBg);
}

document.addEventListener("mousedown", mouseTrue); //  correct reference
document.addEventListener("mouseup", mouseFalse);

function mouseTrue() {
    isMouseClicked = true;
}

function mouseFalse() {
    isMouseClicked = false;
}

function changeBg(event) {
    if (isMouseClicked) {
        event.target.style.backgroundColor = color;
    }
}

function erase() {
    color = "white"; //  fixed: white should be a string
}

function changeColor() { //  fixed typo
    color = input.value;
}


function downloadImage() {
    const board = document.querySelector(".draw-board");
    html2canvas(board).then(canvas => {
        const link = document.createElement("a");
        link.download = "drawing-board.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

input.addEventListener("change", changeColor); //  fixed typo reference






