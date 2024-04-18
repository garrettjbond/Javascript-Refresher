
// The promise object can be used to manage asynchronous code. It does this by breaking it into two pieces (code that takes time to complete and code that contains a result GOOD or BAD). 
// Promises also have 3 states (Pending, Fulfilled, Rejected)
// Promises also have 

function myPromise() {
    let promise = new Promise((myResolve, myReject) => {
        //Producing code: Is code that can take some time to complete. When the producing code obtains the result it should call one of the two call backs (myResolve, myReject)
        setTimeout(() => {
            const randomNum = Math.random();
            randomNum < .5 ? myResolve(randomNum) : myReject(new Error('Random number is too low'));
        }, 5000);
    });
    //Consuming code: is code that must wait for the result
    promise.then(
        // Success callback
        (result) => {
            console.log('Promise fulfilled with result:', result);
        },
        // Error callback
        (error) => {
            console.error('Promise rejected with error:', error);
        }
    );

}

myPromise();



