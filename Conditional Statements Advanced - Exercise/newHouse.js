    function newHouse(cvete, brCvete, budget) {
        let cena = 0;

    switch(cvete) {
        case 'Roses':
            cena = brCvete * 5;
            if (brCvete > 80) {
                cena *= 0.9;
            }
        break;
        case 'Dahlias':
            cena = brCvete * 3.8;
            if(brCvete > 90) {
                cena *= 0.85;
            }
        break;
        case 'Tulips':
            cena =  brCvete * 2.8;
            if (brCvete > 80) {
                cena *= 0.85;
            }
        break;
        case 'Narcissus':
            cena = brCvete * 3;
            if(brCvete < 120) {
                cena *= 1.15;
            }
        break;
        case 'Gladiulos':
            cena = brCvete * 2.5;
            if (brCvete < 80) {
                cena *= 1.2;
            }
        break;
    }
    if (budget >= cena) {
        let ostCena = budget - cena;
        console.log(`Hey, you have a great garden with ${brCvete} ${cvete} and ${ostCena.toFixed(2)} leva left.`);
    }
    else {
        let needCena = cena - budget;
        console.log(`Not enough money, you need ${needCena.toFixed(2)} leva more.`);
    }
    }
newHouse("Gladiulus", 64, 160);