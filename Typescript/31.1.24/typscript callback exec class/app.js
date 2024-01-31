"use strict";
class Contact {
    constructor(id, name, phone, email) {
        this._id = id;
        this._name = name;
        this._phone = phone;
        this._email = email;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
const findContact = (id, contacts) => {
    if (!contacts || contacts.length === 0)
        return null;
    const foundContact = contacts.find(c => c.id === id);
    if (!foundContact)
        return `No contact was foud with this ID`;
    return foundContact;
};
const myContacts = Array();
myContacts.push(new Contact(1, `tomer`, `A@b.com`, `05432`));
myContacts.push(new Contact(2, `noam`, `A@c.com`, `05432`));
myContacts.push(new Contact(3, `kayla`, `A@d.com`, `05432`));
myContacts.push(new Contact(4, `harley`, `A@f.com`, `05432`));
console.log(findContact(1, []));
console.log(findContact(1, null));
console.log(findContact(5, myContacts));
console.log(findContact(3, myContacts));
