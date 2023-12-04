const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = displayUser;

function displayUser() {
    const response = JSON.parse(xhr.responseText);
    /* console.log(response);
    document.getElementById('jsOBJ').innerHTML = response.name;
    document.getElementById('output').innerHTML = response.username;
    document.getElementById('phone').innerHTML = response.phone;
    document.getElementById('email').innerHTML = response.email;
    document.getElementById('address').innerHTML = response.address.street + ' '+ response.address.suite+', '+response.address.city+', '+response.address.zipcode; */

    for(let prop in response){
        document.getElementById('jsOBJ').innerHTML += `<div class="cell">${prop}</div>`
        document.getElementById('jsOBJ2').innerHTML+=`<div class="cell">${response[prop]}</div>`
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'






// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE

// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE



xhr.send();
/* 
const xhr2 = new XMLHttpRequest();

xhr2.onload = ()=>{
    const response2 = JSON.parse(xhr2.responseText);
    for(let prop in response2){
       document.getElementById('jsOBJ2').innerHTML += `<p style="border:1px solid black;padding:10px;">${prop}: ${response2[prop]}</p>` 
    }
}
xhr2.open('GET','https://jsonplaceholder.typicode.com/users/2')


xhr2.send();
 */
