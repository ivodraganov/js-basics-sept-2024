function swimRecord(record, lenght, timeToOneMeter) {

    let needSecs = lenght * timeToOneMeter;
    let suprotivlenuie = Math.floor((lenght / 15)) * 12.5; 
    let obshtoVreme = needSecs + suprotivlenuie;

    if ( record <= obshtoVreme ) {
        let secNeed = obshtoVreme - record;
        console.log(`No, he failed! He was ${secNeed.toFixed(2)} seconds slower.`);
    }
    else { 
        let newRecord = needSecs + suprotivlenuie;
        console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`);
    }
}
//swimRecord(10464, 1500, 20);
swimRecord(55555.67, 3017, 5.03);