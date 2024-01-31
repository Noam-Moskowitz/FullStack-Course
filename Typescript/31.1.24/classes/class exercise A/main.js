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
var _User_id, _User_name, _User_address, _User_email, _User_password;
class Address {
    constructor(state, city, street, houseNumber, zip) {
        this.state = state;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.zip = zip;
    }
}
class User {
    constructor(name, address, phone, email, password) {
        _User_id.set(this, void 0);
        _User_name.set(this, void 0);
        _User_address.set(this, null);
        _User_email.set(this, void 0);
        _User_password.set(this, void 0);
        __classPrivateFieldSet(this, _User_id, Math.floor(Math.random() * 9000000 - 1000000 + 1) + 1000000, "f");
        __classPrivateFieldSet(this, _User_name, name, "f");
        __classPrivateFieldSet(this, _User_address, address, "f");
        this.phone = phone;
        __classPrivateFieldSet(this, _User_email, email, "f");
        __classPrivateFieldSet(this, _User_password, password, "f");
        this.createdAt = new Date();
        this.isAdmin = false;
        this.isBuisness = false;
    }
    get address() {
        return __classPrivateFieldGet(this, _User_address, "f");
    }
    set address(address) {
        __classPrivateFieldSet(this, _User_address, address, "f");
    }
}
_User_id = new WeakMap(), _User_name = new WeakMap(), _User_address = new WeakMap(), _User_email = new WeakMap(), _User_password = new WeakMap();
const newAddress = new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`);
const newUser = new User(`Noam`, newAddress, `999555`, `noam@gmail.com`, `password123`);
console.log(newUser);
