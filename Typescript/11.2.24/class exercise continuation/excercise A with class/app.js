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
var _User1_id, _User1_name, _User1_email, _User1_password, _User1_createdAt, _User1_isAdmin, _User1_isBusiness;
class User1 {
    constructor(name, address, email, phone, password) {
        _User1_id.set(this, void 0);
        _User1_name.set(this, void 0);
        _User1_email.set(this, void 0);
        _User1_password.set(this, void 0);
        _User1_createdAt.set(this, void 0);
        _User1_isAdmin.set(this, void 0);
        _User1_isBusiness.set(this, void 0);
        this.name = name;
        this.address = address;
        __classPrivateFieldSet(this, _User1_email, email, "f");
        this.phone = phone;
        this.password = password;
        __classPrivateFieldSet(this, _User1_isAdmin, false, "f");
        __classPrivateFieldSet(this, _User1_isBusiness, false, "f");
        __classPrivateFieldSet(this, _User1_createdAt, new Date(), "f");
        __classPrivateFieldSet(this, _User1_id, User1.generateId(), "f");
    }
    static generateId() {
        return Math.floor(Math.random() * 9999999 + 100000);
    }
    static capitalizeWord(str) {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
    }
    get name() {
        return __classPrivateFieldGet(this, _User1_name, "f");
    }
    set name(name) {
        __classPrivateFieldSet(this, _User1_name, `${User1.capitalizeWord(name.first)} ${User1.capitalizeWord(name.last)}`, "f");
    }
    get email() {
        return __classPrivateFieldGet(this, _User1_email, "f");
    }
    get password() {
        return __classPrivateFieldGet(this, _User1_password, "f");
    }
    set password(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d[4,])(?=.*[!@#\$%\^&\*])/;
        if (passwordRegex.test(password)) {
            __classPrivateFieldSet(this, _User1_password, password, "f");
        }
        else {
            throw new Error(`Password provided is not valid`);
        }
    }
    get createdAt() {
        return __classPrivateFieldGet(this, _User1_createdAt, "f");
    }
    get isAdmin() {
        return __classPrivateFieldGet(this, _User1_isAdmin, "f");
    }
    set isAdmin(isAdmin) {
        __classPrivateFieldSet(this, _User1_isAdmin, isAdmin, "f");
    }
    get isBusiness() {
        return __classPrivateFieldGet(this, _User1_isBusiness, "f");
    }
    toggleISBusiness() {
        if (__classPrivateFieldGet(this, _User1_isAdmin, "f")) {
            __classPrivateFieldSet(this, _User1_isBusiness, !__classPrivateFieldGet(this, _User1_isBusiness, "f"), "f");
        }
        else {
            throw new Error(`You are not an admin, and not authorized to preform this action.`);
        }
    }
}
_User1_id = new WeakMap(), _User1_name = new WeakMap(), _User1_email = new WeakMap(), _User1_password = new WeakMap(), _User1_createdAt = new WeakMap(), _User1_isAdmin = new WeakMap(), _User1_isBusiness = new WeakMap();
try {
    const user1Noam = new User1({
        first: `noam`,
        last: `moskowitz`
    }, {
        state: `New York`,
        country: `USA`,
        city: `Brooklyn`,
        street: `Avenue P`,
        houseNumber: 12,
        zip: `10952`
    }, `noammz101@gmail.com`, `0546107337`, `Qwerty1234!`);
    console.log(user1Noam);
    user1Noam.name = { first: `noam`, last: `moskowitz` };
}
catch (error) {
    alert(error.message);
}
/* user1Noam.password=`Noam1234!` */
