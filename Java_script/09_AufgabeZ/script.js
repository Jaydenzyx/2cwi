//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):  
//  X X X X  
//  O O O O  
//  X X X X  
//  O O O O  

for (let index = 0; index <4; index++) {
    if (index%2 == 0){
        console.log("xxxx");
    }
    else {
        console.log("OOOO");
    }
} 



//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)  

 let i = 0;
 let y = 0;

 for (let y = 0; y < 101; y++) {
    if (y%2 == 0) {
        i += y;
    }
    
 }

console.log("Die Summe aller Geraden Zahlen ist " + i);

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.:  

//XX X XX X
//X    X X   X  

//X            X 

//X            X 


for (let x = 0; x <8; x++) {
       if (x<6) {
        console.log("                 x");  
    

    }
    
    
    else if (x<8) {

        console.log("x                x");
    } 

 

    }

    console.log("xxxxxxxxxxxxxxxxxx");