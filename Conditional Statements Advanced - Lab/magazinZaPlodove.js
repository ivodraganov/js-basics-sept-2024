function shop(plod, day, count) {
    let banana = 2.50;
    let apple = 1.20;
    let orange = 0.85;
    let grapefruit = 1.45;
    let kiwi = 2.70;
    let pineapple = 5.50;
    let grapes = 3.85;
    if(day == "Saturday" || day == "Sunday") {
        banana = 2.70;
        apple = 1.25;
        orange = 0.90;
        grapefruit = 1.60;
        kiwi = 3.00;
        pineapple = 5.60;
        grapes = 4.20;
        switch(plod) {
            case "banana":
                console.log((banana * count).toFixed(2));
            break;
            case "apple":
                console.log((apple * count).toFixed(2));
            break;
            case "orange":
                console.log((orange * count).toFixed(2));
            break;
            case "grapefruit":
                console.log((grapefruit * count).toFixed(2));
            break;
            case "kiwi":
                console.log((kiwi * count).toFixed(2));
            break;
            case "pineapple":
                console.log((pineapple * count).toFixed(2));
            break;
            case "grapes":
                console.log((grapes * count).toFixed(2));
            break;
            default:
                console.log("error");
            break;
        }
    }
    else if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch(plod) {
            case "banana":
                console.log((banana * count).toFixed(2));
            break;
            case "apple":
                console.log((apple * count).toFixed(2));
            break;
            case "orange":
                console.log((orange * count).toFixed(2));
            break;
            case "grapefruit":
                console.log((grapefruit * count).toFixed(2));
            break;
            case "kiwi":
                console.log((kiwi * count).toFixed(2));
            break;
            case "pineapple":
                console.log((pineapple * count).toFixed(2));
            break;
            case "grapes":
                console.log((grapes * count).toFixed(2));
            break;
            default:
                console.log("error");
            break;
       }
    }
    else {
        console.log("error");
    }
}
shop("apple",
"Tuesday",
2);