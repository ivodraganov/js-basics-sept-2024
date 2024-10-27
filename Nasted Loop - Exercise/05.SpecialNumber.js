function specialNumber(n) {
    let result = "";
    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let isSpecial = true;
        let currentNumString = currentNum + "";
        for (let index = 0; index < currentNumString.length; index++) {
            let digit = Number(currentNumString[index]);
            if (n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if(isSpecial) {
            result += currentNum + " ";
        }
    }
    console.log(result);
}
specialNumber(3);