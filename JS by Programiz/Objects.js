//Initialize - setting up an object with inital state and values
//Instantiate - creating an instance aka object of a class

//Object Methods

let Person = {
    talk: function () {
        console.log("Talk Talk Talk");
    }
}

Person.talk();

//Nested Objects

let Car = {
    model: {
        series: '7A12',
        generation: '11th'
    },

    color: 'red'

}

console.log(Car.model.series);

//Constructor functions with parameters

function Dog(name, breed, location) {
    this.name = name;
    this.breed = breed;
    this.location = location;
}

let Dog1 = new Dog('Junu', 'Cocker spaniel', 'Gyaneshowr');
console.log(Dog1.name);

//Types of object properties

let myDog = {

    //Data properties

    breed: 'Japanese spitz',
    color: 'white',

    //Accessor properties (methods use to get or set value of an object)

    get getBreed() {
        return this.breed;
    },

    set setBreed(newBreed) {
        this.breed = newBreed;
    }
}

//assessing values as properties not function

myDog.setBreed = 'German Shepherd';
console.log(myDog.getBreed);

//using defineProperty
//Syntax: Object.defineProperty(obj, prop, {descriptor})

Object.defineProperty(myDog, 'getColor', {
    get: function () {
        return this.color;
    }
})

Object.defineProperty(myDog, 'setColor', {
    set: function (newcolor) {
        this.color = newcolor;
    }
})

myDog.setColor = 'red';
console.log(myDog.getColor);


//Prototypes - adding properties and methods in objects
//Only functions have prototype property

function House() {
    color: 'red'
}

House.prototype = {
    storey: '6'
}

console.log(House.prototype.storey);

//create objects to access prototype where we dont't have to mention prototype to access

let h1 = new House();
console.log(h1.storey);

//we can also use getPrototype of property
console.log(Object.getPrototypeOf(h1));

//PROTOTYPE CHAINING - JS first searches in object property then only in prototype property

function Person() {
    color: 'red'
}

Person.prototype = {
    color: 'pink'
}

