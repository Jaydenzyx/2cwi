function zahlen(s){


let countA = 0;
let countC = 0;
let countG = 0;
let countT = 0;

for(let i = 0;i<s.length;i++){


    if(s[i] === 'A'){
        countA ++;
    }
    else if(s[i] === 'C'){
        countC ++;
    }
    else if(s[i] === 'G'){
        countG ++;
    }
    else if(s[i] === 'T'){
        countT ++;
    }




}

return countA+" " + countC + " " + countG + " " + countT;

}


const input = "ACCT";

console.log(zahlen(input));
