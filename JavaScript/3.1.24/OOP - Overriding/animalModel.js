class Animal {
    speak() {
        console.log(`The Animal makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`woof woof`);
    }
}
class Cat extends Animal {
    speak() {
        console.log(`Meow Meow`);
    }
}

class AdoptedCat extends Cat {
    speak() {
        super.speak()
        console.log(`Cheap Mewo Meow`);
    }
}

class BoughtCat extends Cat {
    speak() {
        super.speak()
        console.log(`Expensive Mewo Meow`);
    }
}

export {
    Animal,
    Dog,
    Cat,
    AdoptedCat,
    BoughtCat
}