function smartLili(age, washerPrice, priceToy) {
    let moneySaved = 0;
    let moneyGifted = 10;
    for(let birthday = 1; birthday <= age; birthday++) {
        if(birthday % 2 === 0) {
            moneySaved += moneyGifted - 1;
            moneyGifted += 10;
        }
        else {
            moneySaved += priceToy;
        }
    }
    if(moneySaved >= washerPrice) {
        console.log(`Yes! ${(moneySaved - washerPrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(washerPrice - moneySaved).toFixed(2)}`);
    }
}