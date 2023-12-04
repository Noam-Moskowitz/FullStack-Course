const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = displayUser;



xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'






// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE

// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE



xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.onload = displayUser;
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users/2');
xhr2.send();
const xhr3 = new XMLHttpRequest();
xhr3.onload = displayUser;
xhr3.open('GET', 'https://jsonplaceholder.typicode.com/users/3');
xhr3.send();
const xhr4 = new XMLHttpRequest();
xhr4.onload = displayUser;
xhr4.open('GET', 'https://jsonplaceholder.typicode.com/users/4');
xhr4.send();
const xhr5 = new XMLHttpRequest();
xhr5.onload = displayUser;
xhr5.open('GET', 'https://jsonplaceholder.typicode.com/users/5');
xhr5.send();

function displayUser() {
    const response = JSON.parse(xhr.responseText);
    const response2 = JSON.parse(xhr2.responseText);
    const response3 = JSON.parse(xhr3.responseText);
    const response4 = JSON.parse(xhr4.responseText);
    const response5 = JSON.parse(xhr5.responseText);
    /* console.log(response);
    document.getElementById('jsOBJ').innerHTML = response.name;
    document.getElementById('output').innerHTML = response.username;
    document.getElementById('phone').innerHTML = response.phone;
    document.getElementById('email').innerHTML = response.email;
    document.getElementById('address').innerHTML = response.address.street + ' '+ response.address.suite+', '+response.address.city+', '+response.address.zipcode; */

    for (let prop in response) {
        document.getElementById('jsOBJ').innerHTML += `<p class="cell">${prop}</p>`
        document.getElementById('jsOBJ2').innerHTML += `<p class="cell">${response[prop]}</p>`
        document.getElementById('row3').innerHTML += `<div class="cell">${response2[prop]}</div>`
        document.getElementById('row4').innerHTML += `<div class="cell">${response3[prop]}</div>`
        document.getElementById('row5').innerHTML += `<div class="cell">${response4[prop]}</div>`
        document.getElementById('row6').innerHTML += `<div class="cell">${response5[prop]}</div>`

    }
}