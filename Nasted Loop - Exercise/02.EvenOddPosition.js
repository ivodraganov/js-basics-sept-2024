function evenodd(startNum, endNum) {
    let result = "";
    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let evenIndexSum = 0;
        let oddIndexSum = 0;
        let currentNumString = currentNum + "";
        for (let index = 0; index < currentNumString.length; index++) {
            let digit = Number(currentNumString[index]);
            if (index % 2 === 0) {
                evenIndexSum += digit;
            }
            else {
                oddIndexSum += digit;
            }
        } 
        if (evenIndexSum === oddIndexSum) {
            result += currentNum + " ";
        }
    }
    console.log(result);
}