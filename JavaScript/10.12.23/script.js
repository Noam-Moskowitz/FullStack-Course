const getUsersFromServer = ()=> {
    const xhr = new XMLHttpRequest(); 

    xhr.onload = () => {
        const userObj = JSON.parse(xhr.responseText);
let usersHtml = '';
let userKeys = ''
for (keys in userObj[0]){
    userKeys+=`
    <td>${keys}</td>
    `

}
        for(let users of userObj){
            usersHtml+= `
            <tr>
            <td>${users.id}</td>
            <td>${users.name}</td>
            <td>${users.email}</td>
            <td>${users.phone}</td>
            </tr>
            `
        }
document.getElementById('myTable').innerHTML='<tr>'+userKeys+'</tr>'+usersHtml;
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
    xhr.send();
}


const createTableFromUsers = (arrUsers)=>{

}

const  displayUsers = ()=>{
const arrUsers = getUsersFromServer();

createTableFromUsers(arrUsers);
}

document.getElementById('btnLoad').addEventListener("click", displayUsers)


function getNumber(){
    const myPromise= new Promise((resolve,reject)=>{
setTimeout(()=>{
const myNum=Math.random();
if (myNum>0.5) {
    resolve(myNum)
} else{
    reject(myNum)
}
    },2000)


})
myPromise.then((data)=>{
    document.getElementById('number').innerHTML=` ${data}: Success`
}).catch((error)=>{
    document.getElementById('number').innerHTML=` ${error}: Error`
})

}

document.getElementById('start').addEventListener("click",getNumber)

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let name = prompt('Whats your name?','');
        if (name){
resolve(name)
        }else{
            reject(name)
        }
    },3000);
});

    promise.then((data)=>{
alert(data)
    }).catch((error)=>{
        alert(`Error: name was not defined`)
    })