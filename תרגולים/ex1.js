console.log(`===========demo1==========`);
function demo1() {
    let list = document.querySelectorAll('li');
    console.log(list);
    for (let item of list) {
        console.log(item);
    }
}
demo1();
console.log(`===========demo2==========`);
function demo2() {
    let ex1 = document.querySelectorAll('.examp1');
    for (let item of ex1) {
        console.log(item.textContent);
    }
    document.querySelector('.replace').innerHTML = ex1[0].textContent
}
demo2();
