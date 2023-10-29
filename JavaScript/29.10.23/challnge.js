document.addEventListener("keyup", function (abc){
   /*  console.log(abc.key, abc.ctrlKey); */

    if ((abc.key==="b" || abc.key === "B") && abc.ctrlKey)
    alert("Correct Key Pattern")
});