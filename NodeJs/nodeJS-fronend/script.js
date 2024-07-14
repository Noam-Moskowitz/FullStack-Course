

fetch("http://localhost:4000/files")
.then(res => res.json())
.then(data => {
    data.forEach(imgUrl => {
        const div = document.createElement("div");
        div.className = "img";

        
        div.style.backgroundImage = `url('http://localhost:4000/files/${imgUrl}')`;

        const btn=document.createElement(`button`)
        btn.className=`remove`
        btn.innerText=`x`

        btn.addEventListener(`click`,ev=>{
            fetch(`http://localhost:4000/files/${imgUrl}`,{
                method:'DELETE',
            })
            .then(()=>div.remove())
        })

        div.appendChild(btn)

        document.querySelector("#grid").appendChild(div);
    });

});