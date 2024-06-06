//Initialize - setting up an object with inital state and values
//Instantiate - creating an instance aka object of a class

//Object Methods

let Person = {
    talk: function(){
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

function Dog(name, breed, location){
    this.name = name;
    this.breed = breed;
    this.location = location;
}

let Dog1 = new Dog('Junu', 'Cocker spaniel', 'Gyaneshowr');
console.log(Dog1.name);

//Types of object properties

let myDog = {
    breed: 'Japanese spitz',                       //Data properties
    color: 'white',

    get getBreed(){                               //Accessor properties (methods use to get or set value of an object)
    return this.breed;
    },

    set setBreed(newBreed){
        this.breed = newBreed;
    }
}

myDog.setBreed = 'German Shepherd';              //calling as properties not function
console.log(myDog.getBreed);

Object.defineProperty(myDog, 'getColor', {       //using defineProperty
    get: function(){
        return this.color;
    }
})

Object.defineProperty(myDog, 'setColor', {
    set : function(newcolor){
        this.color = newcolor;
    }
})

myDog.setColor = 'red';
console.log(myDog.getColor);



