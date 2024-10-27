function journey(budget, season) {
    let destination;
    let dest;
    let sum;
    if (budget <= 100) {
        switch(season) {
            case "summer":
                destination = "Bulgaria";
                dest = "Camp";
                sum = 0.3 * budget;
            break;
            case "winter":
                destination = "Bulgaria";
                dest = "Hotel";
                sum = 0.7 * budget;
            break;
        }
    }
    else if (budget <= 1000) {
        switch(season) {
            case "summer":
                destination = "Balkans";
                dest = "Camp";
                sum = 0.4 * budget;
            break;
            case "winter":
                destination = "Balkans";
                dest = "Hotel";
                sum = 0.8 * budget;
            break;
        }
    }
    else if (budget > 1000) {
        destination = "Europe";
        dest = "Hotel";
        sum = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${dest} - ${sum.toFixed(2)}`);
 }
 journey(50, "summer");