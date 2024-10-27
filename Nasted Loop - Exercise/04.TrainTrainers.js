function trainTraners(input) {
    let totalGradeSum = 0;
    let PresentationCount = 0;
    let judgeCount = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    while (command !== "Finish") {
        let presentationTitle = command;
        let presentationGradeSum = 0;
        for (let currentJudge = 1; currentJudge <= judgeCount; currentJudge++) {
            let grade = Number(input[index]);
            index++;
            presentationGradeSum += grade;
        }
        let averagePresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${presentationTitle} - ${averagePresentationGrade.toFixed(2)}.`);
        PresentationCount++;
        totalGradeSum += averagePresentationGrade;
        command = input[index];
        index++;
    }
    let totalAverageGrade = totalGradeSum / PresentationCount;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}