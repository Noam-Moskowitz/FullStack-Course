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


class User{
    #id:number;
    #name:string;
    #address:Address|null=null;
phone:string;
#email:string;  
#password:string;
createdAt:Date;
isAdmin:boolean;
isBuisness:boolean;

    constructor(name:string,address:Address, phone:string, email:string, password:string,){
this.#id=Math.floor(Math.random()*9_000_000-1_000_000+1)+1_000_000;
this.#name=name;
this.#address=address;
this.phone=phone;
this.#email=email;
this.#password=password;
this.createdAt=new Date();
this.isAdmin=false;
this.isBuisness=false;

    }


get address():Address|null{
    return this.#address
}

set address(address:Address){
    this.#address=address;
}

    
}

const newAddress= new Address(`New York`, `Brooklyn`, `Avenue J`, 9, `10952`)
const newUser= new User(`Noam`, newAddress, `999555`, `noam@gmail.com`, `password123`,)
console.log(newUser);
