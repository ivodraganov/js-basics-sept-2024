function histogram(input) {
    let n = Number(input[0]);
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    for(let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        if(currentNum < 200) {
            c1++;
        }
        else if(currentNum <= 399) {
            c2++;
        }
        else if(currentNum <= 599) {
            c3++;
        }
        else if(currentNum <= 799) {
            c4++;
        }
        else { 
            c5++; 
        }
    }
    let p1 = (c1 / n) * 100;
    let p2 = (c2 / n) * 100;
    let p3 = (c3 / n) * 100;
    let p4 = (c4 / n) * 100;
    let p5 = (c5 / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram([3,
    1,
    2,
    999]);    