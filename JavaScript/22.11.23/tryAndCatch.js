const result = function divide(num1,num2){
    return num1/num2;
}

let number1 = 50;
let number2 = 12;

let finalMessage = "family *in vin diesel voice*"
try{
console.log(result(number1,b));
} catch (err){
    console.log("The functions was not able to divide the provided variables");
   /*  console.log(err.name);
    console.log(err.message); */
} finally{
    console.log("we have arrived at finally");
    console.log(finalMessage);
    finalMessage="";
    console.log(finalMessage);
}