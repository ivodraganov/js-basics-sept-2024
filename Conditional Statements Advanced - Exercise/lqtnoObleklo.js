function obleklo(gradusi, vreme) {
    let outfit;
    let shoes;
    if(gradusi >= 10 && gradusi <=18) {
        if(vreme == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(vreme == "Afternoon" || vreme == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    else if(gradusi > 18 && gradusi <=24) {
        if(vreme == "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(vreme == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(vreme == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    else if(gradusi >= 25) {
        if(vreme == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(vreme == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else if(vreme == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
}
obleklo(22,
    "Afternoon");