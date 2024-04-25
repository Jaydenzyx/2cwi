function closestToZero(temperatures) {
    let closest = temperatures[0]; 
    for (let i = 1; i < temperatures.length; i++) {
        const current = temperatures[i];
        if ((current < 0 && current > closest) || (current >= 0 && current < closest)) {
            closest = current;
        }
    }

    return closest;
}
const temperatures = [5, 1 , -2,-8,4,5];
console.log(closestToZero(temperatures));