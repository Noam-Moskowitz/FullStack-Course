
setTimeout(() => {
    let name = prompt('What is your name? ', '');
    document.getElementById('body').innerHTML = '<div>' + name + '</div>';
}, 2000);