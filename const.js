// The const declaration does not make it immutable. Meaning it can still be modified, but it cannot be reassigned.
/*
    The keyword const is a little misleading.

    It does not define a constant value. It defines a constant reference to a value.

    Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object
    But you CAN:

    Change the elements of constant array
    Change the properties of constant object

*/

function myConstFunction (){
    const numConst = 1;

    try {
        numConst = 2;
        throw "Cannot be reassigned";
    }
    catch(err){
        console.log("Error: " + err)
    }
}



myConstFunction();