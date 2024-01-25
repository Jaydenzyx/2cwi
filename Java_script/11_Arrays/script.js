//Erstelle ein Array mit folgenden Werten:

//4,1,2,3
let a = 4;
let b = 1;
let c = 2;
let d = 3;

let arr = [4, 1, 2, 3];

//Füge die Werte 17 und 199 dazu

arr.push(17, 199);

console.log(arr[5]);

//Gib alle Werte in einer Schleife aus!
for (let w = 0; w < arr.length; w++) {
  console.log(arr[w]);
}
//Zähle alle Werte zusammen und gib das Ergebnis aus
let all = 0;

for (let a = 0; a < arr.length; a++) {
  all = all + arr[a];
}
console.log(all);

//Berechne den Mittelwert der Zahle0 und gib das Ergebnis aus

let mittelwert = all / arr.length;
console.log(mittelwert);

//Erstelle ein Array mit folgenden Strings:
//"Susi", "Paula", "Hans"

//Gib folgenden Satz aus:
//"Meine Freunde sind Susi, Paula und Hans
let names = ["Susi", "Paula", "Hans"];

console.log("Meine Freunde sind " + names);

names.push("Sepp");

console.log("Meine Freunde sind " + names[0]+ " " + names[1]+ " " + names[2] + " " + "und" + " " + names[3]);


