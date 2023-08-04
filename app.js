let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  //setting squares equal the div within board.
  let squares = board.querySelectorAll("div");
  //clears any existing squares on the board before appending
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  // creates the grid by multipling x and y axis
  let entireGrid = size * size;
  // for loop that for the entire length of the grid
  for (let i = 0; i < entireGrid; i++) {
    // creates a square with createElement each iteration
    let square = document.createElement("div");
    // on mouseover, addEventListener runs colorSquare function.
    square.addEventListener("mouseover", colorSquare);
    // default square color
    square.style.backgroundColor = "white";
    //appends to board
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);

// input onchange function
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector('.error').style.display='none'
    populateBoard(input);
  } else {
    document.querySelector('.error').style.display='flex'
}
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
function changeColor(choice) {
  color = choice;
}
function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
