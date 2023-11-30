let myInterval;

function myFunction() {
    document.getElementById('output').innerHTML += 'i love chicago bulls <br>';
};

function startTimer() {
    myInterval = setInterval(myFunction, 3000);
}

function stopTimer() {
    clearInterval(myInterval);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);