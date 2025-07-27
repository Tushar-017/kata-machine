export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length)); // defining the jump amount

    let i = jmpAmount; // using the jmpAmount as a unit of stepper
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            // finding the upper limit before or at that point the ball breaks
            break;
        }
    }

    i -= jmpAmount; // stepping back by the jmpAmount to find out the exact break point linerly searching b/w i-sqt(n) and i
    for (let j = 0; j < jmpAmount && i < breaks.length; ++i, ++j) {
        if (breaks[i]) {
            // return the index, exact break point if found
            return i;
        }
    }

    // default return
    return -1;
}
