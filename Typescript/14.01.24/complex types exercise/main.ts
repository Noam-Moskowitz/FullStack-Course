const weekDays:string[]=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
console.log(`---1---`);

for(let day of weekDays){
console.log(day);
}
console.log(`---2---`);
const students:object[]=[
    {Name:`Noam`, age:24, hobbie:`Basketball`},
    {Name:`Kayla`, age:21, hobbie:`Soccer`},
    {Name:`Harley`, age:1, hobbie:`Running`},
    {Name:`Nati`, age:18, hobbie:`Fotball`},
    {Name:`Roey`, age:30, hobbie:`Fencing`},
    
];

for(let student of students){
console.log(student);

}
class Car{
    color:string;
    make:string;
    constructor(color:string,make:string){
        this.color=color;
        this.make=make;
    }
}

const cars: Car[]=[ new Car(`subaru`,`red`), new Car(`fiat`,`green`)];
document.getElementById(`output`).innerHTML=cars;


