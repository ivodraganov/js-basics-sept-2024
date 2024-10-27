function shopping(budget, vCardCount, prCount, ramCount) {
    let videoCards = vCardCount * 250.00;
    let proccessors = prCount * (0.35 * videoCards);
    let ramMemories = ramCount * (0.10 * videoCards);
    let finalPrice = videoCards + proccessors + ramMemories;

    if( vCardCount > prCount ) {
        finalPrice *= 0.85;
    }

    if( finalPrice <= budget ) {
        let ost = budget - finalPrice;
        console.log(`You have ${ost.toFixed(2)} leva left!`);
    }

    else {
        let sumNeed = finalPrice - budget;
        console.log(`Not enough money! You need ${sumNeed.toFixed(2)} leva more!`);
    }

}
shopping(900,2,1,3);
//shopping(920.45,3,1,1);