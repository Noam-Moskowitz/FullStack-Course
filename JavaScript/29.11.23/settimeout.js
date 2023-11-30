function myFunction() {
    document.getElementById('output').innerHTML += 'i love chicago bulls <br>';
};
//delay execution
//run in parallel
/* setTimeout(myFunction, 3000); */

//repeat indefinetly
setInterval(myFunction, 3000);
console.log('hello');