import Entity from "./Enitiy";

export default class UserAuth extends Entity {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
    }

    validate = () => {
        const formErrors = {};

        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(this.email)) {
            formErrors['email'] = "Please enter a valid email address";
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{0,}$/;
        if (!passwordRegex.test(this.password)) {
            formErrors['password'] = "Password must contain at least one uppercase letter and a number";
        }



        return formErrors
    }

}