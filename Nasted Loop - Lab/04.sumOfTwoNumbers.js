function sumOfTwoNumbers(a, b, c) {
    let combinations = 0;
    let isFound = false;
    let start = a;
    let final = b;
    let magicNumber = c;
    for (let i = start; i <= final; i++) {
        for (let j = start; j <= final; j++) {
            combinations++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(1, 10, 5);