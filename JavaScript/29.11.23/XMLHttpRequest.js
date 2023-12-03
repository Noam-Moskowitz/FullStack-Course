const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);
    document.getElementById('output').innerHTML = response[3].completed
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1/todos'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'





// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users'); // == CREATE

// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users'); // == UPDATE

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users'); // == DELETE



xhr.send();

