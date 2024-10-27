function gradiation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let sumGrade = 0;
    let i = 1;
    let hasExcluded = false;
    let badGradesCount = 0;
    while(i <= 12) {
        let grade = Number(input[index]);
        index++;
        if(grade < 4) {
            badGradesCount++;
            if(badGradesCount === 2) {
                hasExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }
    if(!hasExcluded) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}