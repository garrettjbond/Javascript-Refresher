function myRestFunction(...sumNums){
    let arr = sumNums;
    console.log(arr);

    let newArr = arr.map((items)=>{
        return items *= 2;
    })

    console.log(newArr);
    // OUTPUT
    // [ 1, 2, 3, 4 ]
    // [ 2, 4, 6, 8 ]
}

myRestFunction(1, 2, 3, 4);



function mySpreadFunction(){
    let scaryArr = ['B', 'O', 'O'];
    let curiousArr = ['W', 'H', 'O'];
    let sadArr = [...scaryArr, " ",...curiousArr, "!"];

    let message = sadArr.join("")

    console.log(message);
}

mySpreadFunction();