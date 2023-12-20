async function postData() {
const myPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
    };

  // 1. 1st option, using async/await
let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(myPost),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
});

  if (response.ok) { // if HTTP status is within the range of 200 and 299
    return response.json(); // Similar to JSON.parse();
}
}

const main = async ()=>{
    let data = await postData();
    alert(data)
}
main()

