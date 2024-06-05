//Function Expression

let sum = function(x,y){
    console.log(`${x}`); //template literals allows string interpolation without having to use concatenation
    console.log(x);
    return x + y;
}
console.log(sum(5,6));

//counter function using recursion

function counterAlarm(number){

    console.log(number + '...');
    if(number > 0){
        counterAlarm(number-1);
    }
    else{
        console.log("Time is up !!");
    }
}

counterAlarm(5);

//Factorial of a number

function factorial(num){

    let result = 0;

    if (num==0 || num == 1){
         console.log('1'); 
    }

    else{
        result += num * (num-1)
    }

    console.log(result);
}

factorial(5);
