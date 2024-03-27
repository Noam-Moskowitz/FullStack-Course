import Entity from "./Enitiy";

export class  Product extends Entity{
    constructor(id,pName,price,quantity){
        super();
        this.id=id;
        this.pName=pName;
        this.price=price;
        this.quantity=quantity;
    }
    


}

const PRODUCTS=[
    new Product(1,`Product 1`,100, 0),
    new Product(2,`Product 2`,200, 0),
    new Product(3,`Product 3`,300, 0),
    new Product(4,`Product 4`,400, 0),
    new Product(5,`Product 5`,500, 0)
]

export {PRODUCTS} ;