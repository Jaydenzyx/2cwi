let B = "Banane";
let A = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleweight = 0.34;
let bananaweight = 0.22;

let PricePerApple = applePricePerKilo*appleweight;
let PricePerBanana = bananaPricePerKilo*bananaweight;

let bananaPerKilo = 1/bananaweight;
let applePerKilo = 1/appleweight;

console.log( "Anzahl an Bananen Pro Kilo ist " + bananaPerKilo);

console.log("Anzahl an Bananen Pro Kilo ist " + applePerKilo);

console.log("Preis pro Banane ist " + PricePerBanana);

console.log("Preis pro Apple ist " + PricePerApple);

console.log("Der Preis von 8 Äpfeln liegt bei " + PricePerApple*8);

console.log("Der Preis von 17 Bananen liegt bei " + PricePerBanana*17);

console.log("Der PReis von 1. Tonne Äpfel liegt bei " + PricePerApple*1000);

console.log("Der PReis von 1. Tonne Bananen liegt bei " + PricePerBanana*1000);