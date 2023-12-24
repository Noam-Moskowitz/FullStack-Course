class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        document.getElementById(`output`).innerHTML += `A ${this.name} Makes A Noise <br>`;
    }
}

const lion = new Animal('Lion');
const cow = new Animal('Cow');

lion.speak();
cow.speak();