function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;
    while (command !== "End") {
        let distination = command;
        let budget = Number(input[index]);
        index++;
        let sum = 0;
        while (sum < budget) {
            let currentMoney = Number(input[index]);
            index++;
            sum += currentMoney;
        }
        console.log(`Going to ${distination}!`);
        command = input[index];
        index++;
    }
}