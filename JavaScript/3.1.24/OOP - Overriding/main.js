import { Animal, Dog, Cat, AdoptedCat, BoughtCat } from "./animalModel.js"

function eventHandler() {
    const animal = new Animal();
    const apchi = new Dog();
    const toy = new Dog();
    const punch = new Dog();
    const tShirt = new Cat();
    const jemma = new AdoptedCat();
    const mitzi = new BoughtCat();

    const arrAnimal = [animal, apchi, toy, punch, tShirt, jemma, mitzi];
    for (let a of arrAnimal) {
        a.speak();
    }
}


document.getElementById(`btn`).addEventListener(`click`, eventHandler)