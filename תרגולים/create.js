let myDiv = document.querySelector('.myDiv');

let par = document.createElement('p');
par.innerHTML = `This is the paragraph`
par.classList.add('left');

myDiv.appendChild(par)