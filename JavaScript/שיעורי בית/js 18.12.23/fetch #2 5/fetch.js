const getData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    if (response.ok) {
        return response.json();
    } else {
        alert(`אירעה שגיאה`);
    }
}

const printData = (data) => {
    let htmlContent = '';
    for (comments of data) {
        if (comments.postId <= 5) {
            htmlContent += `
            <tr>
            <td>${comments.postId}</td>
            <td>${comments.id}</td>
            <td>${comments.name}</td>
            <td>${comments.email}</td>
            <td>${comments.body}</td>
            </tr>
            `
        }
    }

    document.getElementById('output').innerHTML = `<table>${htmlContent}</table>`
}

const main = async () => {
    let response = await getData();
    printData(response)
}
main();