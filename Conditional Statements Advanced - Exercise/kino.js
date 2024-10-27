function kino(project, brRed, brKoloni) {
    let income = 0;
    if(project == "Premiere") {
        income = brRed * brKoloni * 12.00;
        console.log(`${income.toFixed(2)} leva.`);
    }
    else if(project == "Normal") {
        income = brRed * brKoloni * 7.50;
        console.log(`${income.toFixed(2)} leva.`);
    }
    else if(project == "Discount") {
        income = brRed * brKoloni * 5.00;
        console.log(`${income.toFixed(2)} leva.`);
    }
}
kino("Premiere",
10,
12);