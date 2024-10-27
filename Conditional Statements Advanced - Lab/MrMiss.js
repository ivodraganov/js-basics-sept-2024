function obrushtenie(years, gender) {
    if(gender === "m") {
        if(years >= 16) {
            console.log("Mr.");
        }
        else {
            console.log("Master");
        }
    }
    if(gender === "f") {
        if(years >= 16) {
            console.log("Ms.");
        }
        else {
            console.log("Miss");
        }
    }
}
obrushtenie(17,"m");