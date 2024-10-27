function sumBukvi(sumString) {
    let sum = 0;
    for (let i = 0; i < sumString.length; i++) {
        sum += Number(sumString[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumBukvi("1234");