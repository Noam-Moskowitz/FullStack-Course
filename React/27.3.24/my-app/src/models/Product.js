import Entity from "./Enitiy";

export class Product extends Entity {
    constructor(id, pName, price, quantity) {
        super();
        this.id = id;
        this.pName = pName;
        this.price = price;
        this.quantity = quantity;
    }

    validate = () => {
        const formErrors = {};

        if (!this.id) {
            formErrors['id'] = 'Product Id must be defined.'
        }

        if (!this.pName) {
            formErrors['name'] = 'Product Name must be defined.'
        }

        if (!this.price) {
            formErrors['price'] = 'Product Price must be defined.'
        } else {
            if (this.price <= 0 || this.price >= 10_000) {
                formErrors['price'] = 'Price must be between 1 and 9,999.'
            }
        }
        if (!this.quantity) {
            formErrors['quantity'] = 'Product Quantity must be defined.'
        } else {
            if (this.quantity <= 0 || this.quantity >= 10_000) {
                formErrors['quantity'] = 'Quantity must be between 1 and 9,999.'
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