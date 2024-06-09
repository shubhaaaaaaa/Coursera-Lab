//pop- extracts element from last index
//shift- extracts element from starting index

//push- inserts element in last index
//unshift- inserts element in last index

let fruits = ['banana', 'mango'];

fruits.pop();
fruits.push('litchi');
console.log(fruits);

fruits.shift();
fruits.unshift('strawberry');
console.log(fruits);

//splice- (starting index, no of elements) removes elements from array

let numbers1 = ['1', '2', '3','4'];
numbers1.splice(1,2);
console.log(numbers1);

//slice- (starting to not including ending) creates new array from existing
let numbers2 = ['1', '2', '3','4'];
let extract = numbers2.slice(1,3);
console.log(extract);

//Note: Objects can also be passed in arrays

//MAP FUNCTION - applies function to every index of the array

let num = ['1', '2', '3'];

function square(num){
    return num*num;
}


console.log(num.map(square));

//MULTIDIMENSIONAL ARRAY
 let students = [
    ['Shubha','1'],
    ['Radha','2'],
    ['Shyam','3'],
    ['Ghanshyam','4'],
    ['Ritu','5']
 ]

 for (let i = 0; i < students.length; i++){
    for (let j = 0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
 }

students.forEach((student) => {
    student.forEach((data)=> {
        console.log(data);
    });
});

//For..of loop - return value

for ( let i of students){
    for ( let j of i){
        console.log(j);
    }
}

//For..in loop - return key name

let house = {
    one: 'blue',
    two: 'red',
    three: 'green'
    };

for (let key in house){
    console.log(`${key}: ${house[key]}`);
}

//SYMBOL DATATYPE

let x = Symbol('I am a symbol');
console.log(x.description);

//Can be used as an key for a object

let age = Symbol();

let myObject = {
    name: 'Shubha',
    [age]:29
}

console.log(myObject);