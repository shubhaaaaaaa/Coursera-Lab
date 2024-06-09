//TRY....CATCH...FINALLY

setTimeout(()=>{
    try{
        console.lg("Text delayed by 5 seconds.");
        console.log("Text delayed by 5 seconds.");
    }
    catch{
        console.log("There was an error!");
    }
    finally{
        console.log("This code runs anyway.");
    }
},5000);

//THROW STATEMENT - user defined exception

let task = false;

try{

    if (!task){
        throw new Error("Error! Task not completed."); //needs to be inside the try block
    }
    console.log("Task done!");

}

catch(err){
console.log(err.message);
}