import Entity from "./Enitiy";

export class Product extends Entity {
    constructor(id, title, price, quantity) {
        super();
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    validate = () => {
        const formErrors = {};


        if (!this.title) {
            formErrors['name'] = 'Product Name must be defined.'
        }

        if (!this.price) {
            formErrors['price'] = 'Product Price must be defined.'
        } else {
            if (this.price <= 0 || this.price >= 10_000) {
                formErrors['price'] = 'Price must be between 1 and 9,999.'
            }
        }

        return formErrors;
    }



}

const PRODUCTS = [
    new Product(1, `Product 1`, 100, 10),
    new Product(2, `Product 2`, 200, 20),
    new Product(3, `Product 3`, 300, 30),
    new Product(4, `Product 4`, 400, 40),
    new Product(5, `Product 5`, 500, 50)
]

export { PRODUCTS };