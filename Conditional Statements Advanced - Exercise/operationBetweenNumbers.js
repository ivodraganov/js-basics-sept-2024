function operation(a, b, c) {
    let sum;
    switch(c) {
        case "+":
            sum = a + b;
            if (sum % 2 == 0) {
                console.log(`${a} + ${b} = ${sum} - even`);
            }
            else {
                console.log(`${a} + ${b} = ${sum} - odd`);
            }
        break;
        case "-":
            sum = a - b;
            if (sum % 2 == 0) {
                console.log(`${a} - ${b} = ${sum} - even`);
            }
            else {
                console.log(`${a} - ${b} = ${sum} - odd`);
            }
        break;
        case "*":
            sum = a * b;
            if (sum % 2 == 0) {
                console.log(`${a} * ${b} = ${sum} - even`);
            }
            else {
                console.log(`${a} * ${b} = ${sum} - odd`);
            }
        break;
        case "/":
            if(a === 0 || b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            }
            else {
                sum = a / b;
                console.log(`${a} / ${b} = ${sum.toFixed(2)}`);
            }
        break;
        case "%":
            sum = a % b;
            if(a === 0 || b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            }
            else {
                sum = a % b;
                console.log(`${a} % ${b} = ${sum}`);
            }
    }
}
operation(10,
    3,
    "%");