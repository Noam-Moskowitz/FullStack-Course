const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = displayUser;



xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'






// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE

// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE



xhr.send();


function displayUser() {
    const response = JSON.parse(xhr.responseText);
    const response1 = response[0];
    for (prop in response1) {
        document.getElementById('heading').innerHTML += `<p class="cell">${prop}</p>`
    }
    for (i = 0; i < response.length; i++) {
        let users = response[i];
        let myDiv = document.createElement('div');
        myDiv.className = 'row';
        document.getElementById('jsOBJ').appendChild(myDiv);


        for (let prop in users) {
            myDiv.innerHTML += `<p class="cell">${users[prop]}</p>`
        }
    }

}