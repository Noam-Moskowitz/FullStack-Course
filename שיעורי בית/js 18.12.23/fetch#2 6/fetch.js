let post = {
    postId: 1,
    title: `lorem`,
    body: `lorem epsummattie dfbgh hdbfhg shsbfhgn sjfnfj`
}

const postUser = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: `POST`,
        headers: {
            ContentType: `application/json;charset=utf-8`
        },
        body: JSON.stringify(post)
    });
    console.log(response.status);
    if (response.ok) {
        alert(`Upload Succescful`)
    } else {
        alert(`Error: ${response.status}`)
    }

}

postUser();