function kingKong(budgetMovie, crewCount, SingleclothPrice) {
    let decorPrice = 0.1 * budgetMovie;
    let clothPrice = crewCount * SingleclothPrice;
    if ( crewCount > 150 ) {
        clothPrice *= 0.9;
    }
    let totalPrice = decorPrice + clothPrice;
    if ( budgetMovie >= totalPrice ){
        let moneyLeft = budgetMovie - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
    else { 
        let moneyNeeds = totalPrice - budgetMovie;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeds.toFixed(2)} leva more.`);
    }
}


kingKong(20000, 120, 55.5);
kingKong(15437.62,186,57.99);
kingKong(9587.88,
    222,
    55.68);