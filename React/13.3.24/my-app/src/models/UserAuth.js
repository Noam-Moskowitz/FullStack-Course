import { Product } from "./Product";

export default class  UserAuth extends Product{
    constructor(email, password){
        super();
        this.email=email;
        this.password=password;
    }

}