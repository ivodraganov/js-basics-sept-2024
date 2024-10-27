function hotel(mesec, nightCount) {
    let sumAp;
    let sumSt;
    switch (mesec) {
        case "May":
        case "October":
            sumAp = 65;
            sumSt = 50;
            if (nightCount > 7 && nightCount <= 14) {
                sumSt = 0.95 * 50;
            }
            else if (nightCount > 14) {
                sumSt = 0.70 * 50;
            }
        break;
        case "June":
        case "September":
            sumAp = 68.70;
            sumSt = 75.20;
            if (nightCount > 14) {
                sumSt = 0.80 * 75.20;
            }
        break;
        case "July":
        case "August":
            sumAp = 77;
            sumSt = 76;
        break;
    }
    if (nightCount > 14 ) {
        sumAp = 0.90 * sumAp;
    }
    let obshtoAp = sumAp * nightCount;
    let obshtoSt = sumSt * nightCount;
    console.log(`Apartment: ${obshtoAp.toFixed(2)} lv.`);
    console.log(`Studio: ${obshtoSt.toFixed(2)} lv.`);
}
hotel("June", 14);
hotel("August", 20);