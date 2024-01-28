"use strict";
const fn = () => console.log(`Hello`);
fn();
const fn2 = (text, num) => {
    return `this is a string ${text}-${num}`;
};
const str = fn2(`noam`, 37);
console.log(str);
const fn3 = (text, num) => {
    if (num)
        return `Hi, ${text} your lucky number is ${num}`;
    return `no number value provided`;
};
const str1 = fn3(`noam`, 37);
console.log(str1);
