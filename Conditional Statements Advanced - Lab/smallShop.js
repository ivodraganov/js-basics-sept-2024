function smallShop(product, city, counts) {
    let sum = 0;
    if(product === "coffee") {
        if(city === "Sofia") {
            sum = 0.50 * counts;
        }
        else if(city === "Plovdiv") {
            sum = 0.40 * counts;
        }
        else if(city === "Varna") {
            sum = 0.45 * counts;
        }
        console.log(sum);
    }
    else if(product === "water") {
        if(city === "Sofia") {
            sum = 0.80 * counts;
        }
        else if(city === "Plovdiv" || city === "Varna") {
            sum = 0.70 * counts;
        }
        console.log(sum);
    }
    else if(product === "beer") {
        if(city === "Sofia") {
            sum = 1.20 * counts;
        }
        else if(city === "Plovdiv") {
            sum = 1.15 * counts;
        }
        else if(city === "Varna") {
            sum = 1.10 * counts;
        }
        console.log(sum);
    }
    else if(product === "sweets") {
        if(city === "Sofia") {
            sum = 1.45 * counts;
        }
        else if(city === "Plovdiv") {
            sum = 1.30 * counts;
        }
        else if(city === "Varna") {
            sum = 1.35 * counts;
        }
        console.log(sum);
    }
    else if(product === "peanuts") {
        if(city === "Sofia") {
            sum = 1.60 * counts;
        }
        else if(city === "Plovdiv") {
            sum = 1.50 * counts;
        }
        else if(city === "Varna") {
            sum = 1.55 * counts;
        }
        console.log(sum);
    }
}
smallShop("water","Plovdiv",2);