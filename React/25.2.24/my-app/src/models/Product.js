class Product {
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    

}

const PRODUCTS=[
    new Product(1,`Product 1`,10),
    new Product(2,`Product 2`,20),
    new Product(3,`Product 3`,30)
]

export {PRODUCTS, Product} ;