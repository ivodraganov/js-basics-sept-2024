function lodka(budget, season, fishingman) {
    cnea = 0;
    switch(season) {
        case "Spring":
            cena = 3000;
        break;
        case "Summer":
            cena = 4200;
        break;
        case "Autumn":
            cena = 4200;
        break;
        case "Winter":
            cena = 2600;
        break;
    }
    if(fishingman <= 6) {
        cena *= 0.9;    
    }
    else if(fishingman > 7 && fishingman <= 11) {
        cena *= 0.85;
    }
    else if(fishingman >= 12) {
        cena *= 0.75;
    }
    if(fishingman % 2 == 0) {
        if(season != "Autumn") {
            cena *= 0.95;
        }
    }
    if(budget >= cena) {
        let ostCena = budget - cena;
        console.log(`Yes! You have ${ostCena.toFixed(2)} leva left.`);
    }
    else if(budget < cena) {
        let needCena = cena - budget;
        console.log(`Not enough money! You need ${needCena.toFixed(2)} leva.`);
    }
}
lodka(2000,
    "Winter",
    13);