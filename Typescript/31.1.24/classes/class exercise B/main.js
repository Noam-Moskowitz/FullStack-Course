"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_id;
class Address {
    constructor(state, city, street, houseNumber, zip) {
        this.state = state;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.zip = zip;
    }
}
class Fullname {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class User {
    constructor(name, address, email, phone, password) {
        _User_id.set(this, null);
        this.firstName = name.firstName;
        this.lastName = name.lastName;
        this.state = address.state;
        this.city = address.city;
        this.street = address.street;
        this.houseNumber = address.houseNumber;
        this.zip = address.zip;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
    generateId() {
        __classPrivateFieldSet(this, _User_id, Math.floor(Math.random() * 9000000 - 1000000 + 1) + 1000000, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _User_id, "f");
    }
}
_User_id = new WeakMap();
const newAddress = new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`);
const newName = new Fullname(`noam`, `moskowitz`);
const newUser = new User(newName, newAddress, `noam@gmail.com`, `999885544`, `qwert123`);
newUser.generateId();
console.log(newUser.id);
