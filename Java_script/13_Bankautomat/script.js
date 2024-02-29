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
            kontostand = kontostand + Einzahlen;
            console.log("Ihre Einzahlung war Erfolgreich. Neuer Kontostand: " + kontostand);
        }
     
        else if (Einzahlen!=Number) {
            console.log("Ungültige Eingabe. Bitte geben Sie eine Zahl ein.");
        }
    }
       
    if (Selection == 2) {
      console.log("Geben Sie den Betrag ein, den Sie abheben möchten:");
      let Abheben = Number(await readLineAsync());
  
      // Überprüfen, ob die Eingabe eine gültige Zahl ist
      if (isNaN(Abheben)) {
          console.log("Ungültige Eingabe. Bitte geben Sie eine Zahl ein.");
      } else {
          if (Abheben > kontostand) {
              console.log("Der Betrag konnte nicht abgehoben werden. Nicht genügend Guthaben vorhanden.");
          } else {
              kontostand -= Abheben;
              console.log("Erfolgreich abgehoben. Neuer Kontostand: " + kontostand);
          }
      }
  }
  

    if (Selection == 3)
    console.log("Ihr Kontostand Beträgt:" + kontostand);


    if (Selection == 4){
      isfinished = true;
      console.log("Tschüss");
      process.exit(0);
    }
    
}