//De-Structuring Objects and Arrays
// Destructuring means making an independent copy of an original, which value we can chang without affecting original value.

// For Arrays

var topper = ['Ramu', 'Shyamu'];

let [winner, runnerup] = topper; //assign variable name
console.log(winner, runnerup);

[winner, runnerup] = [runnerup, winner] //swap variable name
console.log(winner, runnerup);
console.log(topper[0]);

[topper[0], topper[1]] = [topper[1], topper[0]] //mutate array
console.log(topper);
console.log(topper[0]);

// For Objects

var Person = {
    name1: 'Ram',
    location: 'Paris'
}

var { name1: renamed, location: relocated } = Person; //assigning name
console.log(renamed, relocated);

// For of loops

var Car = {
    model: 'M360',
    color: 'red',
    type: 'manual'
}

for (var key of Object.keys(Car)) {
    console.log(Car[key]);
}


