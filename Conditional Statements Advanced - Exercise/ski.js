function ski(dni, vidPom, ocenka) {
    let obshtaCena = 0;
    let noshtuvki = dni - 1;
    switch (vidPom) {
        case "room for one person":
            obshtaCena = noshtuvki * 18;
            break;
        case "apartment":
            obshtaCena = noshtuvki * 25;
            if (noshtuvki <= 10) {
                obshtaCena *= 0.7;
            }
            else if (noshtuvki <= 15) {
                obshtaCena *= 0.65;
            }
            else {
                obshtaCena *= 0.5; 
            }
            break;
        case "president apartment":
            obshtaCena = noshtuvki * 35;
            if (noshtuvki <= 10) {
                obshtaCena *= 0.9;
            }
            else if (noshtuvki <= 15) {
                obshtaCena *= 0.85;
            }
            else { 
                obshtaCena *= 0.8; 
            }
            break;
    }
    if ( ocenka === "positive") {
        obshtaCena *= 1.25;
    }
    else if ( ocenka === "negative") {
        obshtaCena *= 0.9;
    }
    console.log(obshtaCena.toFixed(2));
}
ski(30,"president apartment","negative");