import { log } from "console";
import { read } from "fs";
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

let kontostand = 0;
let isfinished = false;

while (!isfinished){

    console.log("1 Einzahlen");
    console.log("2 Abheben");
    console.log("3 Kontostand");
    console.log("4 Ende");


    let Selection = await readLineAsync();
    if (Selection == 1) {
        console.log("Geben sie den Betrag ein den sie Einzahlen möchten");
        let Einzahlen = Number(await readLineAsync());
        if (Einzahlen>0) {
            console.log("Ihre Einzahlung war Erfolgreich");
      
            kontostand = kontostand + Einzahlen;
        }
     
        else if (Einzahlen<=0) {
            console.log("Ihre Einzahlung war Ungültig");
        }
    }
       
    if (Selection == 2) {
        console.log("Geben sie den Betrag ein den Sie abheben möchten");
        let Abheben = Number(await readLineAsync());
        

    }


}