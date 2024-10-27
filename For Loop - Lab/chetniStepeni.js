function stepeni(sum) {
    let num = 1;
    for (let i = 0; i <= sum; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}
stepeni(10);