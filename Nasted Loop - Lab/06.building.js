function building(a, b) {
    let floor = Number(a);
    let rooms = Number(b);
    for (let x = floor; x > 0; x--) {
        let buffer = "";
        for (let y = 0; y < rooms; y++) {
            if (x === floor) {
                buffer += `L${x}${y} `;
            }
            else if (x % 2 === 0) {
                buffer += `O${x}${y} `;
            }
            else {
                buffer += `A${x}${y} `;
            }
        }
        console.log(buffer);
    }
}
building(6, 4);