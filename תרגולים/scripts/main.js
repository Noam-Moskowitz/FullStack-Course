const usersTable = document.querySelector('.users-table');
const submitBtn = document.querySelector('#submitBtn');


for (user of users) {
    let row = usersTable.insertRow();
    for (key in user) {
        let cell = row.insertCell();
        let text = document.createTextNode(user[key]);
        cell.appendChild(text);
    }
    let cell = row.insertCell();
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let btnText1 = document.createTextNode('התחברות');
    let btnText2 = document.createTextNode('התנתקות');
    let btnText3 = document.createTextNode('מחיקה');
    button1.classList.add('btn');
    button2.classList.add('btn');
    button3.classList.add('btn');
    button1.classList.add('m-1');
    button2.classList.add('m-1');
    button3.classList.add('m-1');
    button1.appendChild(btnText1);
    button1.classList.add('btn-alert')
    cell.appendChild(button1);
    button2.appendChild(btnText2);
    button2.classList.add('btn-secondary')
    cell.appendChild(button2);
    button3.appendChild(btnText3);
    button3.classList.add('btn-primary')
    cell.appendChild(button3);

}