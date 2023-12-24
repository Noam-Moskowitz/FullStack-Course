const getPosts = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return response.json();
}

const logPosts = (posts) => {
    console.log(posts);
}

const main = async () => {
    let response = await getPosts();
    logPosts(response)
}
main();