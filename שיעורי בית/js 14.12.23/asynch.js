const randomNumber = (maxNum) => {
    return new Promise((reslove, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                reslove(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.status)
            }
        }

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
        xhr.send();

    })
};

const secondrequest = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.status)
            }
        }

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments')
        xhr.send();
    })
}


const main = async () => {
    let myNum = await randomNumber();
    document.getElementById('output').innerHTML = myNum[0].name;
    let secondRequest = await secondrequest();
    document.getElementById('output').innerHTML += `<br>` + secondRequest[0].name;
}
main();