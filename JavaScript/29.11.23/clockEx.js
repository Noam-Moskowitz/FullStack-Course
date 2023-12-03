

setInterval(() => {
    let d = new Date()
    let scnds = d.getSeconds();
    let mns = d.getMinutes();
    let hrs = d.getHours();
    let time = hrs + ':' + mns + ':' + scnds;

    if (scnds < 10) {
        time = hrs + ':' + mns + ':0' + scnds;
    }
    else if (mns < 10) {
        time = hrs + ':0' + mns + ':' + scnds;
    } else if (hrs < 10) {
        time = '0' + hrs + ':' + mns + ':' + scnds;
    }
    document.getElementById('clock').innerHTML = time

}, 1000)