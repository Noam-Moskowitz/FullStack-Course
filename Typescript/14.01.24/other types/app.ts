let myAge:string|number;

myAge=24;
myAge=`24`;

let myName:any;

myName=`noam`;
myName=24;
myName=true;
myName=[1,2,3,4];


let arr1:string[] =[];
arr1[0]=`Noam`;
arr1.push(`Kayla`);

let arr2:string[]=[`noam`,`kayla`];

console.log(arr1,arr2);

let arr3:object[]=[
    {},
    {}
]
class Student{

}

let arrGeneric:Array<Student>=[];
