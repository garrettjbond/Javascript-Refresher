function myTryCatchFinallyFunction() {
    try{
        // console.log("This will work")
        console.lg("This won't work")
    }
    catch(err){
        console.log("Error Message: " + err)
    }
    finally{
        console.log("This will always run")
    }

}

function myTryThrowCatchFunction(isSingleDigit) {
    try{
        let num = isSingleDigit;
        // console.log("This will work")
        if(num < 10){
            console.log("Success");
        }
        else{
            throw "You've entered a double digit, please enter a single digit.";
        }
    }
    catch(error){
        console.log("Error Message: " + error)
    }
    finally{
        console.log("This will always run")
    }

}


myTryCatchFinallyFunction();
myTryThrowCatchFunction(10);