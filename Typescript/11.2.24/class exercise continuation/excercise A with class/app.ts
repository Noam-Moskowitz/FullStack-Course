interface IAddress{
state:string;
country:string;
city:string;
street:string;
houseNumber:number;
zip:string;
}

interface IName{
    first:string;
    last:string;
}

class User1{
    #id:number;
    #name?:string;
    address:IAddress;
    phone:string;
    #email:string;
    #password?:string;
    #createdAt:Date;
    #isAdmin:boolean;
    #isBusiness:boolean;

    constructor(name:IName, address:IAddress, email:string,phone:string, password:string){
this.name=name;
this.address=address;
this.#email=email;
this.phone=phone;
this.password=password;
this.#isAdmin=false;
this.#isBusiness=false;
this.#createdAt= new Date();
this.#id = User1.generateId();
    }

    static generateId(){
        return  Math.floor(Math.random()*9_999_999+1_00_000)
    }

    static capitalizeWord(str:string):string{
        return str.charAt(0).toLocaleUpperCase()+str.slice(1).toLocaleLowerCase();
    }

    get name():string{
        return this.#name!;
    }

    set name(name:IName){
        this.#name=`${User1.capitalizeWord(name.first)} ${User1.capitalizeWord(name.last)}`
    }

    get email(){
        return this.#email;
    }

    get password(){
        return this.#password!;
    }

    set password(password:string){
    const   passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d[4,])(?=.*[!@#\$%\^&\*])/;

        if (passwordRegex.test(password)) {
        this.#password=password;
        }else{
        throw new Error(`Password provided is not valid`)
        }
    }
    
    get createdAt(){
        return this.#createdAt;
    }

    get isAdmin(){
        return this.#isAdmin;
    }

    set isAdmin(isAdmin:boolean){
        this.#isAdmin=isAdmin;
    }

    get isBusiness(){
        return this.#isBusiness;
    }

    toggleISBusiness(){
        if (this.#isAdmin) {
        this.#isBusiness=!this.#isBusiness;
        }else{
            throw new Error(`You are not an admin, and not authorized to preform this action.`)
        }
    }
}

try {
    const user1Noam= new User1(
    {
        first:`noam`,
        last:`moskowitz`
    },
    {
        state:`New York`,
        country:`USA`,
        city:`Brooklyn`,
        street: `Avenue P`,
        houseNumber:12,
        zip:`10952`
    },
    `noammz101@gmail.com`,
    `0546107337`,
    `Qwerty1234!`
)


console.log(user1Noam);
user1Noam.name={first:`noam`, last:`moskowitz`}
} catch (error:any) {
    alert(error.message)
    
}



/* user1Noam.password=`Noam1234!` */

