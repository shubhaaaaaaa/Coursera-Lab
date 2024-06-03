//Calculate total cost of buying an item using OOP Principles

//Using functional programming

var price = 200;
var vat = 13;

function totalPrice(price, vat) {
    return price + (price * vat);
}

console.log("The total amount to pay is " + totalPrice(price, vat));

//Using object oriented programming

class Item {

    //initialize the parameters of the class
    constructor(price, vat) {
        this.price = price;
        this.vat = vat;
    }

    totalPrice(price, vat) {
        return price + (price * vat);
    }
}

var item1 = new Item();
var item2 = new Item();

console.log("The price for item1 is " + item1.totalPrice(200, 13));
console.log("The price for item2 is " + item2.totalPrice(300, 10));

//OOP Principles

//Inheritance
//One class can use methods of another

class Bird {
    layEggs() {
        console.log('I can lay eggs.');
    }

    canFly() {
        console.log('I can fly.');
    }

    haveBeak() {
        console.log('I have a beak.');
    }
}

class Eagle extends Bird {

}

var eagle1 = new Eagle();
eagle1.canFly();

//Encapsulation
//Binding data members with member variables to ensure data privacy as the user will access to the variable not the actual data, it is an implementation level process.

var name = "Ramu";
console.log(name.toUpperCase()); // we don't need to see the code for how the method works

//Abstraction
//Writing code in generalized way, reducing complexity, it is a design level process.

class Machine{

    constructor (model, year){
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(this.model + this.year + " has started.");
    }
    stop(){
        console.log(this.model + this.year + " has started.");
        }
}

var oven = new Machine('Bajaj', 2016);
oven.start();
oven.stop(); //We don't need to know how oven stops we just need to lnow how to use the method stop

//Polymorphism
//Using the same method or function for various purposes

var Bicycle = {
    bell: function(){
        console.log("Leave the road.")
    }
}
var Door = {
    bell: function(){
        console.log("Open the door.")
    }
}

Bicycle.bell();
Door.bell(); //same funtion different result.













































