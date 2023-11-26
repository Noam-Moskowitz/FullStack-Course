const arr1 =[4,5,6];
const arr2 = [1,2,3 ,...arr1];
/* console.log(arr2); */

const arr3 = [11,22,33,44];
function print(num1, ...myarr){
    console.log(num1);
    console.log(myarr);
};

/* print(10,arr3); */


/* const cart1 = [7,390,27,89];
const cart2 = [...cart1]
console.log(cart1);
console.log(cart2);
 */
/* 
Shallow copy */
const cart1 = [11,22,33,44];
const cart2 = [45,56,67,78];

const carts = [cart1,cart2];
/* console.log(carts) */

carts[1][2]=12;
/* console.log(carts) */

/* deep copy */
const carts1 = [...cart1,...cart2];
console.log(carts1);
carts1[6]=999;
console.log(carts1);
console.log(cart2);