const multiply = (a,b)=>{
    return a*b
}

const calculate = (callback) =>{
    const result = callback(5,7);
    console.log('the result is '+result);
}
calculate(multiply);

const isEven=(num)=>{
    return 2%num;
}
const checkNumber=(callback)=>{
    if(callback(8)){
        console.log("מספר זוגי");
    }else{
        console.log("אי זוגי");
    }
}
checkNumber(isEven);