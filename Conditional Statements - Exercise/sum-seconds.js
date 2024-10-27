function time(firstTime, secTime, thrTime) {
    let total = firstTime + secTime + thrTime;
    let min = Math.floor(total / 60);
    let sec = total % 60;
    if (sec < 10) { 
        console.log(`${min}:0${sec}`);
    }
    else { 
        console.log(`${min}:${sec}`);
    }
}
time(35,45,44);