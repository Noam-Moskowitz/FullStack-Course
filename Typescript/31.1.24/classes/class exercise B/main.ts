class Address {
    state:string;
    city:string;
    street:string;
    houseNumber:number;
    zip:string;
        constructor(state:string,city:string,street:string,houseNumber:number,zip:string,) {
            this.state=state;
            this.city=city;
            this.street=street;
            this.houseNumber=houseNumber;
            this.zip=zip
        }
    }

class Fullname{
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

class User{
    #id:number|null=null;
    firstName:string;
    lastName:string;
    state:string;
    city:string;
    street:string;
    houseNumber:number;
    zip:string;
    email:string;
    phone:string;
    password:string;
    constructor(name:Fullname, address:Address, email:string, phone:string, password:string){
this.firstName=name.firstName;
this.lastName=name.lastName;
this.state=address.state;
this.city=address.city;
this.street=address.street;
this.houseNumber=address.houseNumber;
this.zip=address.zip;
this.email=email;
this.phone=phone;
this.password=password;
    }

    generateId(){
        this.#id=Math.floor(Math.random()*9_000_000-1_000_000+1)+1_000_000;
    }
    get id(){
        return this.#id;
    }
}

const newAddress= new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`);
const newName= new Fullname(`noam`,`moskowitz`)

const newUser= new User(newName,newAddress,`noam@gmail.com`, `999885544`, `qwert123`)
newUser.generateId()
console.log(newUser.id);
