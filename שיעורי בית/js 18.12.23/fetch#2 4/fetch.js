const getPosts = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/pots`)
    if (response.ok) {
        return response.json();
    } else {
        alert(`אירעה שגיאה`);
    }
}

const logPosts = (posts) => {
    console.log(posts);
}

const main = async () => {
    let response = await getPosts();
    logPosts(response)
}
main();