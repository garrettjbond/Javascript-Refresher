function display(message){
    console.log("From the display Function: " + message);
}


function myCallBackFunction() {
    console.log("From the myCallBackFunction: " + "Test");

    display("Test")


}

myCallBackFunction();
