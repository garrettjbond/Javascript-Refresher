// Hoisting is JavaScript's default behavior of moving declarations to the top.

function myHoisting() {
    //In JavaScript, a variable can be declared after it has been used.
    //In other words; a variable can be used before it has been declared.
    xVar = 5;
    var xVar;
    console.log(xVar);

    //This will result in a ReferenceError:
    yLet = 6;
    let yLet;
    console.log(yLet);

    // Using a const variable before it is declared, is a syntax error, so the code will simply not run.
    zConst = 7;
    const zConst;   
    console.log(zConst);
    
    

}

myHoisting();