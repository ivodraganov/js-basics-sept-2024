function toyShop1(arg1, arg2, arg3, arg4, arg5, arg6) {
    let puzzel = arg2 * 2.60;
    let doll = arg3 * 3;
    let bear = arg4 * 4.10;
    let minion = arg5 * 8.20;
    let truck = arg6 * 2;
    let otstypka = 0.0;
    let igrachki = arg2 + arg3 + arg4 + arg5 + arg6;
    let suma = puzzel + doll + bear + minion + truck;
    if ( igrachki >= 50 ) { 
        otstypka = suma * 0.25;
    }
    let pechalba = suma - otstypka;
    let naem = 0.10 * pechalba;
    let krainaCena = pechalba - naem;
    if ( krainaCena >= arg1 ) {
        krainaCena = krainaCena - arg1;
        console.log(`Yes! ${krainaCena.toFixed(2)} lv left.`);
    }
    else {
        krainaCena = arg1 - krainaCena;
        console.log(`Not enough money! ${krainaCena.toFixed(2)} lv needed.`);
    }

}

function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let moneyEarned = (arg2 * 2.6) + (arg3 * 3) + (arg4 * 4.1) + (arg5 * 8.2) + (arg6 * 2);
    let totalToys = arg2 + arg3 + arg4 + arg5 + arg6;
    if( totalToys >= 50 ) {
        moneyEarned *= 0.75;
    }
    moneyEarned *= 0.9;
    if( moneyEarned >= arg1 ) {
        let moneyLeft = moneyEarned - arg1;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeed = arg1 - moneyEarned;
        console.log(`no! ${moneyNeed.toFixed(2)} lv left.`);
    }
}
toyShop(40.8,20,25,30,50,10);
//toyShop1(320,8,2,5,5,1);