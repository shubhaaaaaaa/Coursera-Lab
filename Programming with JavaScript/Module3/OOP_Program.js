class Animal{
    constructor(color = 'red', energy = 100){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        if(this.energy>=0){
            this.energy-=20;
            console.log("Burning energy. Currently at " + this.energy );

        }

        if(this.energy==0){
            this.sleep();
        }
    }

    sleep(){
        this.energy +=20;
        console.log("Restoring energy. Currently at " + this.energy );                 
    }                                                                                                                                                                              

    getColor(){
        console.log('I am '+ this.color + ' in color.');                                                                  
    }
}

class Cat extends Animal{
    constructor(sound = 'purr', canJumpHigh = true ,canClimbTrees = true, color, energy){
        super(color, energy); //calls constructor of parent class
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){
        console.log("I make " + this.sound + "sounds.");
    }
}

class Bird extends Animal{
    constructor(sound = 'chirps', canFly = true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly
    }

    makeSound(){
        console.log("I make " + this.sound + "sounds.");
    }
}

class HouseCat extends Cat{
    constructor(houseCatSound = 'meow ', sound, canClimbTrees, canJumpHigh, color, energy){
        super(sound, canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log("I make " + this.houseCatSound + "sounds.");
    }
}



class Tiger extends Cat{
    constructor(tigerSound = 'roar', sound, canClimbTrees, canJumpHigh, color, energy){
        super(sound,canClimbTrees, canJumpHigh, sound, energy)
        this.tigerSound = tigerSound;
    }

    makeSound(option){
        if (option){
            super.makeSound();
        }

        console.log("I make " + this.tigerSound + "sounds.");
    }
}

class Parrot extends Bird{
    constructor(canTalk, sound, canFly, color, energy){
        super(canFly, color, energy, sound);
        this.canTalk = canTalk;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }

        if(this.canTalk){
            console.log("I am talking.");
        }
    }
}

var kittyCat = new Cat;
kittyCat.isActive();

var birdie = new Bird();
birdie.makeSound();

var biralo = new HouseCat('meow', 'purr', true, true, 'white', 70);
biralo.makeSound(false);