//PROMISES - responds whether a block of code ran successfully or not

let displayTimer = new Promise(function(resolve,reject){
    setTimeout(() => {

        let i = -9;

        if(i>=0){            
            for( i = 0; i <= 3; i++){
                console.log(i);
            }
    
            resolve("Timer Stops!!");  
        }
        else{
            reject("The number is less than one.")
        }
    }, 3000);
});

displayTimer
    .then((value)=>{
            console.log(value);
    })
            
    .catch((error)=>{
        console.log(error);            
    })

    .finally(()=>{
        console.log("Finally runs whether promise is resolved or rejected");
    })

// REST PARAMETER - takes in  infinite arguments in form of an array

function displayNames(n1,n2, ...args){
    console.log("n1:", n1);
    console.log("n2:", n2);
    console.log("args:", args);
}

displayNames('shubha','ram','sita','rita','gita');

//SPREAD OPERATOR - unpacks element of an array

let array1 = ['italy', 'america','london'];
console.log(...array1);
console.log(array1);