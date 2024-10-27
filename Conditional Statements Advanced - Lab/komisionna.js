function komisionna(city, value) {
    if(value >= 0 && value <= 500) {
        switch(city) {
            case "Sofia":
                console.log((value * 0.050).toFixed(2));
            break;
            case "Varna":
                console.log((value * 0.045).toFixed(2));
            break;
            case "Plovdiv":
                console.log((value * 0.055).toFixed(2));
            break;
            default: console.log("error");
        }
    }
    else if(value > 500 && value <= 1000) {
        switch(city) {
            case "Sofia":
                console.log((value * 0.070).toFixed(2));
            break;
            case "Varna":
                console.log((value * 0.075).toFixed(2));
            break;
            case "Plovdiv":
                console.log((value * 0.080).toFixed(2));
            break;
            default: console.log("error");
        }
    }
    else if(value > 1000 && value <= 10000) {
        switch(city) {
            case "Sofia":
                console.log((value * 0.080).toFixed(2));
            break;
            case "Varna":
                console.log((value * 0.10).toFixed(2));
            break;
            case "Plovdiv":
                console.log((value * 0.12).toFixed(2));
            break;
            default: console.log("error");
        }
    }
    else if(value > 10000) {
        switch(city) {
            case "Sofia":
                console.log((value * 0.12).toFixed(2));
            break;
            case "Varna":
                console.log((value * 0.13).toFixed(2));
            break;
            case "Plovdiv":
                console.log((value * 0.145).toFixed(2));
            break;
            default: console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
komisionna("Plovdiv",
499.99);