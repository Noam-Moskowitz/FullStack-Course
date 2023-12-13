function getData(countryName){
    const myPromise = new Promise((resolve,reject)=>{
const xhr = new XMLHttpRequest();

xhr.onload=()=>{
    if (xhr.status===200) {
        resolve(xhr.responseText)
    }else{
        reject(xhr.statusText)
    }
};

xhr.open(`GET`,`https://restcountries.com/v3.1/name/${countryName}`);
xhr.send();
});
return myPromise;
};

function printData() {
    const cName=prompt('Name A Country','')
    const p = getData(cName);

    p.then((data)=>{
        console.log(JSON.parse(data));
    }).catch((error)=>{

    })
}

document.getElementById('btnLoad').addEventListener('click',printData)

/* const myPromise = getData(`Israel`);
myPromise.then((data)=>{
    console.log(data);
}).catch(error=>alert(error)) */