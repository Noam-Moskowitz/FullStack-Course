class Contact{
    private _id:number;
    private _name: string;
    
    private _phone: string;
   
    private _email: string;
  
    constructor( id:number,  name:string,  phone:string,  email:string ){
this._id=id;
this._name=name;
this._phone=phone;
this._email=email;
    }

get id():number{ return this._id;}

set id(id:number){this._id=id;}
get name(): string {  return this._name; }

set name(value: string) { this._name = value; }
get phone(): string {
        return this._phone;
    }
set phone(value: string) {
        this._phone = value;
    }
get email(): string {
        return this._email;
    }
set email(value: string) {
        this._email = value;
    }
}

const findContact = (id:number, contacts:Contact[]| null):null|string|Contact =>{

    if(!contacts||contacts.length===0) return null;
    const foundContact=contacts.find(c => c.id===id)

    if (!foundContact) return `No contact was foud with this ID`;

    return foundContact
}
const myContacts:Contact[]=Array<Contact>();
myContacts.push(new Contact(1, `tomer`,`A@b.com`,`05432`))
myContacts.push(new Contact(2, `noam`,`A@c.com`,`05432`))
myContacts.push(new Contact(3, `kayla`,`A@d.com`,`05432`))
myContacts.push(new Contact(4, `harley`,`A@f.com`,`05432`))

console.log(findContact(1,[]));
console.log(findContact(1,null));
console.log(findContact(5,myContacts));
console.log(findContact(3,myContacts));


