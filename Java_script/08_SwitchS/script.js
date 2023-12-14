let random = Math.random() * (10-5) + 5;
let round = Math.round(random)

console.log(round);

// Wenn der Wert 10 ist gib aus Ten 
// Wenn der Wert 9 ist gib aus Nine 
// Wenn der Wert 8 ist gib aus Eight 
// etc. 


switch (round) {
    case 10:
        console.log("Ten");
        break;
        case 9:
            console.log("Nine");
            break;
            case 8:
                console.log("Eight");
                break;
                case 7:
                    console.log("Seven");
                    break;
                    case 6:
                        console.log("Six");
                        break;
                        case 5:
                            console.log("Five");
                            break;

}