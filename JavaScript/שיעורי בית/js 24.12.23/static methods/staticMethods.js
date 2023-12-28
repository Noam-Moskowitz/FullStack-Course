
//first exercise
class Counter {
    static counter = 0;
    constructor() {
        Counter.counter++
    }
}
const c1 = new Counter()
const c2 = new Counter()
const c3 = new Counter()
const c4 = new Counter()
const c5 = new Counter()
console.log(Counter.counter);

console.log(`   `);

//second exercise
class TempertureConverter {

    static celsiusToFarenheit(celsius) {
        return celsius * 9 / 5 + 32
    }

    static faremheitToCelsius(farenheit) {
        return (farenheit - 32) * 5 / 9
    }

};

let c0 = TempertureConverter.celsiusToFarenheit(0);
let c25 = TempertureConverter.celsiusToFarenheit(25);
let c100 = TempertureConverter.celsiusToFarenheit(100);

let f32 = TempertureConverter.celsiusToFarenheit(32);
let f72 = TempertureConverter.celsiusToFarenheit(72);
let f212 = TempertureConverter.celsiusToFarenheit(212);

console.log(`c0: ${c0}`);
console.log(`c25: ${c25}`);
console.log(`c100: ${c100}`);
console.log(`f32: ${f32}`);
console.log(`f72: ${f72}`);
console.log(`f212: ${f212}`);

console.log(`   `);

//third exercise
class CircleUtilities {
    static pi = 3.14159;

    static calculateArea(radius) {
        return this.pi * radius ^ 2
    }
}

const r1 = CircleUtilities.calculateArea(4);
const r2 = CircleUtilities.calculateArea(55.4);
const r3 = CircleUtilities.calculateArea(172.98);
const r4 = CircleUtilities.calculateArea(87.1);
const r5 = CircleUtilities.calculateArea(99);
const r6 = CircleUtilities.calculateArea(23.6);

console.log(`4: ${r1}`);
console.log(`55.4: ${r2}`);
console.log(`172.98: ${r3}`);
console.log(`87.1: ${r4}`);
console.log(`99: ${r5}`);
console.log(`23.6: ${r6}`);