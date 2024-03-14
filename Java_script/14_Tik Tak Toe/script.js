import { log } from "console";
import { read } from "fs";
import { abort } from "process";
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
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

field [0][1] = 1;
field [1][1] = 2;


printField();


function printField(){
    for (let row = 0; row <field.length; row++) {
       let actualrow = field[row];
       let output = "";
       for (let col = 0; col<actualrow.length;col++){
        let sign =" ";
        if (actualrow[col]==1){
            sign = "X"
        } else if (actualrow[col]== 2){
            sign = "O"
        }
        
        
        output += sign + " | ";

       } 
       console.log (output);
    }
} 