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
    static capitalizeWord(last: string) {
        throw new Error("Method not implemented.");
    }
    #id:number;
    #name:Fullname;
    state:string;
    city:string;
    street:string;
    houseNumber:number;
    zip:string;
    email:string;
    phone:string;
    password:string;
    #isAdmin:boolean;
    #isBusiness:boolean;
    constructor(name:Fullname, address:Address, email:string, phone:string, password:string){
this.#name=name;
this.state=address.state;
this.city=address.city;
this.street=address.street;
this.houseNumber=address.houseNumber;
this.zip=address.zip;
this.email=email;
this.phone=phone;
this.password=password;
this.#id=this.generateId();
this.#isAdmin=false;
this.#isBusiness=false;
    }

    generateId(){
       return Math.floor(Math.random()*9_000_000-1_000_000+1)+1_000_000;
    }
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    setName(name:Fullname){
        const first = name.firstName.charAt(0).toLocaleUpperCase()+name.firstName.slice(1);
        const last = name.lastName.charAt(0).toLocaleUpperCase()+name.lastName.slice(1);
        this.#name=new Fullname(first, last);
    }

get isBusiness(){
    return this.#isBusiness;
}
get isAdmin(){
    return this.#isAdmin;
}

setIsBusiness(status:boolean, adminStatus:boolean){
if (adminStatus===true) {
    if (status===true) {
        this.#isBusiness=false;
    }else{
        this.#isBusiness=true;
    }
}else{
    console.log(`youre not an admin`);
    
}
}
}

const newAddress= new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`);
const newName= new Fullname(`noam`,`moskowitz`)

const newUser= new User(newName,newAddress,`noam@gmail.com`, `999885544`, `qwert123`)
newUser.generateId()
newUser.setName(new Fullname(`noam`,`moskowitz`))
console.log(newUser.name);
newUser.setIsBusiness(newUser.isBusiness, newUser.isAdmin)
console.log(newUser.isBusiness);

