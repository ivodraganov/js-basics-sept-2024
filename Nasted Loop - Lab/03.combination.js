function combination(input) {
    let x = input;
    let validCombinationsCount = 0;
    for (let x1 = 0; x1 <= x; x1++) {
        for (let x2 = 0; x2 <= x; x2++) {
            for (let x3 = 0; x3 <= x; x3++) {
                let sum = x1 + x2 + x3;
                if(x === sum) {
                    validCombinationsCount++;
                }
            }
        } 
    }
    console.log(validCombinationsCount);
}

combination(25)