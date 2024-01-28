interface IProduct{
    id:number;
    name:string;
}

class Vehicle{
id:number;
    name:string;
    year:number;
    constructor(id:number,name:string,year:number){
this.id=id;
this.name=name;
this.year=year;
    }
}
const products:Array<IProduct>=[];

products.push(new Vehicle(1,`volswagen`,2006))
products.push(new Vehicle(2,`volvo`,2016))
products.push(new Vehicle(3,`mercedes`,2023))

function printProduct(interfaceArray:Array<IProduct>){
for(let product of products){
    console.log(`Product ID:`,product.id);
    console.log(`Product Name:`,product.name);
    
}

}

printProduct(products)