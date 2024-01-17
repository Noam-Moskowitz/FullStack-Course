const fn: Function= ()=> console.log(`Hello`);

fn();

const fn2=(text:string,num:number):string=>{
    return `this is a string ${text}-${num}`
}

const str:string = fn2(`noam`,37)
console.log(str);


const fn3=(text:string,num?:number):string=>{
    if(num) return `Hi, ${text} your lucky number is ${num}`
    return `no number value provided`
}

const str1:string = fn3(`noam`,37)
console.log(str1);


