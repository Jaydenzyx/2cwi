import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function printField() {
  for (let row = 0; row < field.length; row++) {
    let actualRow = field[row];
    let output = "";
    for (let col = 0; col < actualRow.length; col++) {
      let sign = " ";
      if (actualRow[col] == 1) {
        sign = "X";
      } else if (actualRow[col] == 2) {
        sign = "O";
      }
      output += sign + " | ";
    }
    console.log(output);
    console.log("---------");
  }
}

let isFinished = false;
let currentPlayer = 1;

while (!isFinished) {
  console.log(
    "Player" + " " + [currentPlayer] + " " + "select a Column (0, 1, 2):"
  );
  let inColumn = await readLineAsync();

  if (inColumn != 0 && inColumn != 1 && inColumn != 2) {
    console.log("Invalid Column, please select another Column");
    continue;
  }

  console.log("Select a Row (0, 1, 2):");
  let inRow = await readLineAsync();

  if (inRow != 0 && inRow != 1 && inRow != 2) {
    console.log("Invalid Row, please select another Row");
    continue;
  }

  if (field[inRow][inColumn] != 0) {
    console.log("Already in use, please select another cell");
    continue;
  }

  field[inRow][inColumn] = currentPlayer;
  printField();

  if (checkWin(currentPlayer)) {
    console.log("Player" + " " + [currentPlayer] + " " + "Won!");
    isFinished = true;
    continue;
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      (field[i][0] == player &&
        field[i][1] == player &&
        field[i][2] == player) ||
      (field[0][i] == player && field[1][i] == player && field[2][i] == player)
    ) {
      return true;
    }
  }

  if (
    (field[0][0] == player && field[1][1] == player && field[2][2] == player) ||
    (field[0][2] == player && field[1][1] == player && field[2][0] == player)
  ) {
    return true;
  } else {
    return false;
  }
}

process.exit();
