"use strict";
class Vehicle {
    constructor(id, name, year) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
}
const products = [];
products.push(new Vehicle(1, `volswagen`, 2006));
products.push(new Vehicle(2, `volvo`, 2016));
products.push(new Vehicle(3, `mercedes`, 2023));
function printProduct(interfaceArray) {
    for (let product of products) {
        console.log(`Product ID:`, product.id);
        console.log(`Product Name:`, product.name);
    }
}
printProduct(products);
