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
var _User_id, _User_name, _User_isAdmin, _User_isBusiness;
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
    static capitalizeWord(last) {
        throw new Error("Method not implemented.");
    }
    constructor(name, address, email, phone, password) {
        _User_id.set(this, void 0);
        _User_name.set(this, void 0);
        _User_isAdmin.set(this, void 0);
        _User_isBusiness.set(this, void 0);
        __classPrivateFieldSet(this, _User_name, name, "f");
        this.state = address.state;
        this.city = address.city;
        this.street = address.street;
        this.houseNumber = address.houseNumber;
        this.zip = address.zip;
        this.email = email;
        this.phone = phone;
        this.password = password;
        __classPrivateFieldSet(this, _User_id, this.generateId(), "f");
        __classPrivateFieldSet(this, _User_isAdmin, false, "f");
        __classPrivateFieldSet(this, _User_isBusiness, false, "f");
    }
    generateId() {
        return Math.floor(Math.random() * 9000000 - 1000000 + 1) + 1000000;
    }
    get id() {
        return __classPrivateFieldGet(this, _User_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _User_name, "f");
    }
    setName(name) {
        const first = name.firstName.charAt(0).toLocaleUpperCase() + name.firstName.slice(1);
        const last = name.lastName.charAt(0).toLocaleUpperCase() + name.lastName.slice(1);
        __classPrivateFieldSet(this, _User_name, new Fullname(first, last), "f");
    }
    get isBusiness() {
        return __classPrivateFieldGet(this, _User_isBusiness, "f");
    }
    get isAdmin() {
        return __classPrivateFieldGet(this, _User_isAdmin, "f");
    }
    setIsBusiness(status, adminStatus) {
        if (adminStatus === true) {
            if (status === true) {
                __classPrivateFieldSet(this, _User_isBusiness, false, "f");
            }
            else {
                __classPrivateFieldSet(this, _User_isBusiness, true, "f");
            }
        }
        else {
            console.log(`youre not an admin`);
        }
    }
}
_User_id = new WeakMap(), _User_name = new WeakMap(), _User_isAdmin = new WeakMap(), _User_isBusiness = new WeakMap();
const newAddress = new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`);
const newName = new Fullname(`noam`, `moskowitz`);
const newUser = new User(newName, newAddress, `noam@gmail.com`, `999885544`, `qwert123`);
newUser.generateId();
newUser.setName(new Fullname(`noam`, `moskowitz`));
console.log(newUser.name);
newUser.setIsBusiness(newUser.isBusiness, newUser.isAdmin);
console.log(newUser.isBusiness);
