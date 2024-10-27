function areaOfFigures(figure, razmer1, razmer2) {
    //let figure = fig;
    let a = parseFloat(razmer1);
    let b = parseFloat(razmer2);
    
    if(figure==="square") {
        console.log((a * a).toFixed(3));
    }
    else if(figure==="rectangle") {
        console.log((a * b).toFixed(7));
    }
    else if(figure==="circle") {
        console.log((Math.PI*(a*a)).toFixed(3));
    }
    else if(figure==="triangle") {
        console.log(((a*b)/2).toFixed(3));
    }
 }
areaOfFigures("rectangle",7,2.5);