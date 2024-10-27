function isValid(num) {
    let valid = num >= 100 && num <= 200 || num == 0;
    if(!valid) {
        console.log("invalid");
    }
}
isValid(10);