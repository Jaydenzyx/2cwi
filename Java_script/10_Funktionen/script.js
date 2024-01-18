function add(a,b) {
    console.log(a+b);
}

add(2,4);

function subtract(a,b) {
    console.log(a-b);
} 

subtract(2,4);

function mulitply(a,b) {
    console.log(a*b);
}

mulitply(2,4);

function supercalculation(a,b) {
    console.log((a+b)/2 * a);
}

supercalculation(2,4);

function printEasterDate(J) {

N = J-1900;
A = N % 19;
B = [(7*A+1)/19];
M = (11*A+4-B) %29;
Q = [N/4];
W = (N+Q+31-M) % 7;;
P = 25-M-W;

}



printEasterDate(2023);


    
if (P>0) {
    console.log("Der Oster Sonntag ist der " + Math.ceil(P) + " April");
} 
else { 
   console.log("Der Obersonntag ist der " + Math.round(P + 31) + " März " ); 
    
} 



//Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern. 