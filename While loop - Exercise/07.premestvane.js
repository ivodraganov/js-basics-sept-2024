function premestvane(input) {
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * lenght * height;
    let index = 3;
    let command = input[index];
    index++;

    while(command !== "Done") {
        let boxCount = Number(command);
        volume -= boxCount;
        if(volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        }
        command = input[index];
        index++;
    }
    console.log(`${Math.abs(volume)} Cubic meters left.`);
    
}