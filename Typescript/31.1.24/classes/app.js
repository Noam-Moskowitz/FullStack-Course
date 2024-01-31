"use strict";
class User {
    constructor(name) {
        this._name = name;
        this.createdAt = new Date();
    }
}
User.age = 20;
console.log(User.age);
const u = new User(`noam`);
console.log(u.createdAt);
