function bitinvert(invert){


    let invertedSequenz = '';

    for (let i = 0;i<invert.length;i++){


        if (invert[i]=== '0'){
          invertedSequenz += '1';
        }

        else if (invert[i]==='1'){
        invertedSequenz += '0';
        }

    }

return invertedSequenz;

}

let input = '000111000';

console.log(bitinvert(input));