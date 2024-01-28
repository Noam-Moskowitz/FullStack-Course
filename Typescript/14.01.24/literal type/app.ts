let literalNumber:12=12;
//cannot be changed later as assigned literally in the definiton of the variable.
let literalObj:{name:`Noam`,age:45}={
    name:`Noam`,
    age:45
}
//can be changed later as types are assigned more generally
let regularObj:{name:string,age:number}={
    name:`Noam`,
    age:45
}

console.log(`literalNumber:`,literalNumber);
console.log(`literalObj:`,literalObj);

//literalNumber=25;
