function stupki(input) {
    let totalSteps = 0;
    let index = 0;
    let command = input[index];
    index++;
    while(command !== "Going home") {
        let steps = Number(command);
        totalSteps += steps;
        if(totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
            return;
        }
        command = input[index];
        index++;
    }
    let stepsGoingHome = Number(input[index]);
    totalSteps += stepsGoingHome;
    if(totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - 10000} steps over the goal!`);
        return;
    }
    else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
        
    }
}