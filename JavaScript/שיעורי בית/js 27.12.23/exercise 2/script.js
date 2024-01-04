export default class User {
    #users;

    async getUsers() {
        this.#users = await this.#getUsersFromServer();
        return this.#users
    }

    setUsers(data) {
        this.#users = data;
    }

    async #getUsersFromServer() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {

            const jsonResponse = await response.json();
            return jsonResponse;
        }

    }

    async getUsersAsHTML() {
        if (this.#users == undefined) {
            this.#users = await this.#getUsersFromServer();
        }
        let html = ` `;
        for (let user in this.#users) {
            html += `
                <tr>
                <td>${this.#users[user].name}</td>
                <td>${this.#users[user].username}</td>
                <td>${this.#users[user].email}</td>
                <td>${this.#users[user].phone}</td>
                </tr>
                `
        }
        return html
    }
}



