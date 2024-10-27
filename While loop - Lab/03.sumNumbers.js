function numbers(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;
    while(sum < n) {
        let currentSum = Number(input[index]);
        sum += currentSum;
        index++;
    }
    console.log(sum);
    
}