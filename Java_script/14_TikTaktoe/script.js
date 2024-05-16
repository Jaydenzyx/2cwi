import { userInfo } from "os";
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

printField();

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

        output += sign + " | ";
      }
      console.log(output);
    }
  }
}

let isfinished = false;
let User1 = true;
if (User1) {
  console.log("Player 1´s turn");
}

while (!isfinished) {
  console.log("Select a Column");

  let inColumn = await readLineAsync();

  if (inColumn != 0 && inColumn != 1 && inColumn != 2) {
    console.log("Invalid Column, please select a other Column");
  }

  console.log("Select a Row");

  let inrow = await readLineAsync();

  if (inrow != 0 && inrow != 1 && inrow != 2) {
    console.log("Invalid Row, please select a other row");
  }

  if (field[inrow][inColumn] != 0) {
    console.log("Already in use, please select a other Column");
  }

  if (User1) {
    console.log(field[inrow][inColumn] == 1);

    User1 = false;
    console.log("Player 2´s turn");
  } else if (!User1) {
    console.log(field[inrow][inColumn] == 2);
  }

  User1 = true;
  console.log("Player 1´s turn");

  if (
    field[0][0] == 1 &&
    field[0][1] == 1 &&
    field[0][2] == 1 &&
    field[1][0] == 1 &&
    field[1][1] == 1 &&
    field[1][2] == 1 &&
    field[2][0] == 1 &&
    field[2][1] == 1 &&
    field[2][2] == 1 &&
    field[0][0] == 1 &&
    field[1][0] == 1 &&
    field[2][0] == 1 &&
    field[0][1] == 1 &&
    field[1][1] == 1 &&
    field[2][1] == 1 &&
    field[0][2] == 1 &&
    field[1][2] == 1 &&
    field[2][2] == 1
  ) {
    console.log("Player 1 Won!");
    isfinished = true;
  }

  if (
    field[0][0] == 2 &&
    field[0][1] == 2 &&
    field[0][2] == 2 &&
    field[1][0] == 2 &&
    field[1][1] == 2 &&
    field[1][2] == 2 &&
    field[2][0] == 2 &&
    field[2][1] == 2 &&
    field[2][2] == 2 &&
    field[0][0] == 2 &&
    field[1][0] == 2 &&
    field[2][0] == 2 &&
    field[0][1] == 2 &&
    field[1][1] == 2 &&
    field[2][1] == 2 &&
    field[0][2] == 2 &&
    field[1][2] == 2 &&
    field[2][2] == 2
  ) {
    console.log("Player 2 Won!");
    isfinished = true;
  }
}
