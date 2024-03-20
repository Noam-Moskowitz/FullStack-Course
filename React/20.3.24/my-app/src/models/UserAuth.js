import Entity from "./Enitiy";

export default class  UserAuth extends Entity{
    constructor(email, password){
        super();
        this.email=email;
        this.password=password;
    }

}