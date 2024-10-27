function deleno(chislo, chislo2) {
    let sum = 0;
    let output = '';
    for (let i = chislo; i < chislo2; i++) {
        if (i % 9 === 0) {
            sum += i;
            output += Number(i) + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);
}
deleno(100, 200);