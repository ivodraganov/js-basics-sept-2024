function bonnus(tochki) {
    let bonus = 0.0;

    if ( tochki < 100 ) {
        bonus = 5;
    }
    else if ( tochki > 1000 ) {
        bonus = 0.10 * tochki;
    }
    else { 
        bonus = 0.20 * tochki;
    }
    if ( tochki % 2 == 0 ) {
        bonus += 1;
    }
    else if ( tochki % 10 == 5 ) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(tochki + bonus);
}
    
bonnus(20);