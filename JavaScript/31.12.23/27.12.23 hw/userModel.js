export default class User{
#users;
constructor(){

}

async getUser(){
    this.#users= await this.#getUsersFromServer();;
    return this.#users;
}

setUser(data){
this.#users=data;
}

async #getUsersFromServer(){
const response = await fetch('https://jsonplaceholder.typicode.com/users');
if (response.ok) {
    return  response.json();
}else{
    console.log(response.statusText);
}
};

async getUsersAsHTML(){
    if (!this.#users) {
        this.#users= await this.#getUsersFromServer();
    }

    let htmlContent = `<table>`;

    htmlContent+=`
    <thead>
    <td>ID</td>
    <td>Name</td>
    <td>Username</td>
    <td>Email</td>
    <td>Phone Number</td>
    </thead>`

        for (let user of this.#users) {
        htmlContent += `
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        `;
        }
        htmlContent+=`</table>`;
        return htmlContent;
    }
};

