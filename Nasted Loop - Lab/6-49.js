function toto(input) {
    let result = [];
    for (let a = 1; a <= 49; a++) {
        for (let b = 1; b <= 49; b++) {
            for (let c = 1; c <= 49; c++) {
                for (let d = 1; d <= 49; d++) {
                    for (let e = 1; e <= 49; e++) {
                        if (a !== b && a !== c && a !== d && b !== e) {
                            let currentCombination = [a, b, c, d, e].sort(function (a, b) { return a - b }).join(" , ");
                            if (!result.includes(currentCombination)) {
                                result.push(currentCombination);
                            }
                        }
                    }
                }
            }
        }
    }
    console.table(result);
}