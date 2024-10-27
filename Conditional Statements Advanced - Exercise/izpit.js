function examCalc(startHour, startMinute, arrivalHour, arrivalMinute) {
    startHour = Number(startHour);
    startMinute = Number(startMinute);
    arrivalHour = Number(arrivalHour);
    arrivalMinute = Number(arrivalMinute);
    
    let startTotalMinutes = (startHour * 60) + startMinute;
    let arrivalTotalMinutes = (arrivalHour * 60) + arrivalMinute;
    let diff;
    let hours;
    let minutes;
    if (startTotalMinutes > arrivalTotalMinutes) { 
        diff = startTotalMinutes - arrivalTotalMinutes;
        if (diff >= 1 && diff <= 30) {
            console.log('On time');
            console.log(`${diff} minutes before the start`);
        } else if (diff > 30 && diff <= 59) {
            console.log('Early');
            console.log(`${diff} minutes before the start`);
        } else if (diff >= 60) {
            hours = Math.floor(diff / 60);
            minutes = diff % 60;
            if (minutes < 10) {
                console.log('Early');
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else if (startTotalMinutes < arrivalTotalMinutes) { 
        diff = arrivalTotalMinutes - startTotalMinutes;
        if (diff >= 1 && diff <= 59) {
            console.log('Late');
            console.log(`${diff} minutes after the start`);
        } else if (diff >= 60) {
            hours = Math.floor(diff / 60);
            minutes = diff % 60;
            if (minutes < 10) {
                console.log('Late');
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (startTotalMinutes == arrivalTotalMinutes) {
        console.log('On time');
    }
}