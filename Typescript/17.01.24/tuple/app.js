"use strict";
// 1. Standard implementation of Array
const arr = [];
arr[0] = 'Tomer';
arr[1] = 34;
console.log(`Regular Array: ${arr}`);
// 2. Generics implementation of Array
const arrGenerics = [];
arrGenerics[0] = 'Tomer';
arrGenerics[1] = 34;
console.log(`Regular Array: ${arrGenerics}`);
// 3. Typle implementation of Array
const arrTuple = ['Tomer', 23];
arrTuple[0] = 'Tomer';
arrTuple[1] = 34;
console.log(`Regular Array: ${arrTuple}`);
const arrTuple2 = ['Tomer', 23, true, 99];
arrTuple2[0] = 'Tomer';
arrTuple2[1] = 34;
arrTuple2[2] = false;
arrTuple2[3] = 88;
// arrTuple2[3] = true; // Error ==> array element at index is of incorrect type
// arrTyple2[4] = 'Sagi' // Error ==> index out of bounds
console.log(`Regular Array: ${arrTuple}`);
// Example: Function that returns an array of grades and the average of all grades
function getStudentGrades() {
    // Create array of grades
    const arrGrades = [23, 45, 77, 22, 99, 55, 88];
    // Calculate average
    let sum = 0;
    for (let g of arrGrades) {
        sum += g; // --> sum = sum + g;
    }
    const avg = Math.round(sum / arrGrades.length);
    // Create the tuple
    const gradesTuple = [arrGrades, avg];
    // Return the tuple
    return gradesTuple;
}
const studentGrades = getStudentGrades();
console.log(`Grades: ${studentGrades[0]}, Average: ${studentGrades[1]}`);
