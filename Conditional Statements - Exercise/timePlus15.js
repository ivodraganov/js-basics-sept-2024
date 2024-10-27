function timeplus(hours, mins) {
    let minutes = mins + 15;
    if ( minutes > 59 ) {
        minutes -= 60;
        hours += 1;
    }
    if ( hours == 24 ) {
        hours = 0;
    }
    if ( minutes < 10 ) {
        console.log(`${hours}:0${minutes}`);
    }
    else {
        console.log(`${hours}:${minutes}`);
    }
    
}
timeplus(0,11);