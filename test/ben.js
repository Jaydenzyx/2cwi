function rent(P,H,R){

let monthlyrent= P*H;

if(monthlyrent>R){
    return "YES";
}

else if (monthlyrent===R){
    return "BARELY";
}

else if(monthlyrent<R){
    return "NO";
}

}


let P = 20;
let H = 100;
let R = 600;

console.log(rent(P,H,R));