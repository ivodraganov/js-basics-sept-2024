function grivni(input) {
    let djobni = 5 * input[0];
    let pariNaDen = 5 * input[1];
    let razhodi = input[2];
    let cenaPodarak = input[3];
    let obshtoSpecheleniPari = (djobni + pariNaDen) - razhodi;

    if (obshtoSpecheleniPari >= cenaPodarak) {
        console.log(`Profit: ${obshtoSpecheleniPari.toFixed(2)} BGN, the gift has been purchased.`)
    }
    else {
        let diff = cenaPodarak - obshtoSpecheleniPari;
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
    }
}
grivni(["15.20",
    "200.00","7.3","1500.12"])