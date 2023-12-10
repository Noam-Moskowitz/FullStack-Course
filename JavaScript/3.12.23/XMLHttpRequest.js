const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'
const table = document.getElementById('table');

xhr.onload = displayUser;



xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'






// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE

// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE



xhr.send();


function displayUser() {
    const response = JSON.parse(xhr.responseText);
    for (user in response[0]){
            let cell = document.getElementById('firstRow').insertCell();
            cell.textContent = user
            document.getElementById('firstRow').appendChild(cell)
    }
    for (user of response) {
        let row = table.insertRow();
        for (key in user) {
            let cell = row.insertCell();
            let text = document.createTextNode(user[key]);
            cell.appendChild(text)
        }
    }

}