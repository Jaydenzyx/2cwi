function zahlen(s){

    let Eins = 0;
    let zwei = 0;
    let drei = 0;
    let vier = 0;
    let fünf = 0;
    let sechs = 0;
    let sieben = 0;
    let acht = 0;
    let neun = 0;
    
    
    for(let i = 0;i<s.length;i++){
    
    if (s[i]=== '4'){
        vier ++;
    }

    else if (s[i]=== '5'){
        fünf ++;
    }

    else if (s[i]=== '6'){
        sechs ++;
    }

    else if (s[i]=== '7'){
        sieben ++;
    }
       
    
    }
    
    return vier+" " + fünf + " " + sechs + " " + sieben;
    
    }
    
    
    const input = "8,2,1,4,6,1,8,7";
    
    console.log(zahlen(input));
    

