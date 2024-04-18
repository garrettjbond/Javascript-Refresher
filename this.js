
console.log("Alone, this refers to the global object: " + this);

function myThisFunction () {
    console.log("In a function, this refers to the global object: " + this);
    
    let person = {
        firstName: "Beth",
        lastName: "Bond",
        gender: "Female",
        hairColor: "Golden",
        fullname: function(){
            console.log("In an object method, this refers to the object: " + this);
            return this.firstName + " " + this.lastName
        }
    }

    person.fullname();
}

function myStrictThisFunction() {
    "use strict"
    console.log("In a strict function this becomes undefined: " + this)

}


myThisFunction();
myStrictThisFunction();
