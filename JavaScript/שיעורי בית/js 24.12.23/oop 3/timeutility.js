class TimeUtility {
    constructor() {
        let date = new Date();
        let utcOffset = date.getTimezoneOffset();
        console.log(utcOffset);
    }

    createTimer(elementID) {
        setInterval(() => {
            const hr = date.getHours().toString().padStart(2, `0`);
            const mn = date.getMinutes().toString().padStart(2, `0`);
            const sc = date.getSeconds().toString().padStart(2, `0`);
            let clock = `${hr}:${mn}:${sc}`

            document.getElementById(elementID).innerHTML = clock;

        }, 1000)
    }
}