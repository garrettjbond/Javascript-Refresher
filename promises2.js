function myPromise2(){
    let mannersPromise = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            const message = 'Please';
            message == "Please" ? resolve(message): reject(message);
        }, 1000);
    });
    mannersPromise.then((result)=>{console.log("Promise fulfilled: Thank you for saying: " + result)}, (error)=>{console.log("You said: " + error + " Next time say: 'Please'");})


}

myPromise2();