const getData= async()=>{
let response = await fetch(`https://jsonplaceholder.typicode.com/posts/17/comments`);

if (response.ok&&response.status===200) {
    return response.json() 
}
}

const  main=async()=>{
const data = await getData();
updateUi(data)
}

const updateUi = (data)=>{
let htmlContet =''

for(posts of data){
    htmlContet+=`
    <tr>
    <td>${posts.postId}</td>
    <td>${posts.id}</td>
    <td>${posts.name}</td>
    <td>${posts.email}</td>
    <td>${posts.body}</td>
    </tr>
    `;

}
    
    document.getElementById('output').innerHTML=` <table>${htmlContet}</table>`
}

main()