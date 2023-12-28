class BasicUser {
    firstName;
    lastName;
    userName;
    password;
    isLogin = false;
    constructor(firstName, lastName, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
    }

    sayWelcome() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    changeName(first_Name, last_Name) {
        this.firstName = first_Name;
        this.lastName = last_Name;
    }
    logIn(user, password) {
        if (user == this.userName && password == this.password) {
            this.isLogin = true;
        }
    }
    logOut() {
        this.isLogin = false;
    }
    changePassword(oldPassword, newPassword) {
        if (oldPassword == this.password) {
            this.password = newPassword;
        }
    }

};

const p1 = new BasicUser(`Noam`, `Moskowitz`, `Noammz`, `qwerty123`);
console.log(`before any change:`);
console.log(p1);

p1.logIn(`Noammz`, `qwerty123`);

console.log(`after logIn method:`);
console.log(p1);

p1.sayWelcome();

p1.changeName(`john`, `Meyer`);

console.log(`after changeName method: `);

p1.sayWelcome();

p1.logOut();

console.log(`after logOut method:`);
console.log(p1);

p1.changePassword(`qwerty123`, `passkey`);

console.log(`after changePassword method:`);
console.log(p1);


