// Erstelle zwei Zufallszahl zwischen 0 und 100 
// Speichere diese jeweils in einer Variable 

let rm1 = Math.random()*101;
let rn1 = Math.round(rm1)
console.log(rn1);

let rm2 = Math.random()*101;
let rn2 = Math.floor(rm2)
console.log(rn2);



 

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 

 if ((rn1<rn2) && (rn1<50)) {
    console.log("Zahlt 1 ist kleiner als Zahl 2 und Mini");
 }

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 

if ((rn1<30)|| (rn2<30)) {
    console.log("Eine der beiden ist kleiner als 30");
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if ((rn1<50) && (rn2!=50)) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
