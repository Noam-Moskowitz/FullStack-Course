const randomNum = (maxNum)=>{
return Math.floor(Math.random()*maxNum);
}

const printNum = (inputtedNum)=>{
    let myNum = randomNum(inputtedNum);
    document.getElementById('output').innerHTML=myNum;
}

export{printNum};