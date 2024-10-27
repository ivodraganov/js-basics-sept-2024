function zaplata(input) {
    let tabCount = input[0];
    let salary = input[1];
    for(let i = 2; i < tabCount + 2; i++) {
        let currentWebSite = input[i];
        if(currentWebSite === "Facebook") {
            salary -= 150;
        }
        else if(currentWebSite === "Instagram") {
            salary -= 100;
        }
        else if(currentWebSite === "Reddit") {
            salary -= 50;
        }
        if(salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(salary);
}