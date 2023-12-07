const usersTable = document.querySelector('.users-table');
const submitBtn = document.querySelector('#submitBtn');


for (user of users) {
    let row = usersTable.insertRow();
    for (key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    let cell = row.insertCell();
    let disconnect = document.createElement('button');
    let remove = document.createElement('button');
    let edit = document.createElement('button');
    let buttonDiv = document.createElement('div');
    buttonDiv.append(disconnect, remove, edit);

    for (children of buttonDiv.children) {
        children.classList.add('btn');
        children.classList.add('m-1');
    }

    remove.textContent = 'מחיקה';
    edit.textContent = 'עריכה';
    disconnect.textContent = 'התנתקות';

    remove.classList.add('btn-alert')
    disconnect.classList.add('btn-secondary')
    edit.classList.add('btn-primary')

    cell.appendChild(buttonDiv);
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    const user = {
        fname: event.target.form['fname'].value,
        lname: event.target.form['lname'].value,
        email: event.target.form['email'].value,
        password: event.target.form['password'].value,
        isLoggedIn: false
    }
    let row = usersTable.insertRow();

    for (key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    let cell = row.insertCell();
    let disconnect = document.createElement('button');
    let remove = document.createElement('button');
    let edit = document.createElement('button');
    let buttonDiv = document.createElement('div');
    buttonDiv.append(disconnect, remove, edit);

    for (children of buttonDiv.children) {
        children.classList.add('btn');
        children.classList.add('m-1');
    }

    remove.textContent = 'מחיקה';
    edit.textContent = 'עריכה';
    disconnect.textContent = 'התנתקות';

    remove.classList.add('btn-alert')
    disconnect.classList.add('btn-secondary')
    edit.classList.add('btn-primary')

    cell.appendChild(buttonDiv);
    event.target.form.reset()

});