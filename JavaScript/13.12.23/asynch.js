const output = document.getElementById('output');

const randomNumber =(maxNum)=>{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    let num= Math.floor(Math.random()*maxNum);
    resolve(num);
    },3000)
})
}

async function main(){
    let inputNum= prompt('choose a number','')
    const randomNum = await randomNumber(inputNum);
    output.innerHTML= randomNum
}
main();