class TimeUtility {
    constructor() {
    }

    createTimer(elementID) {
        setInterval(() => {
            const date = new Date();
            const hr = date.getHours();
            const mn = date.getMinutes();
            const sc = date.getSeconds();
            let clock = `${hr}:${mn}:${sc}`
            if (hr < 10) {
                clock = `0${hr}:${mn}:${sc}`
            }
            if (mn < 10) {
                clock = `${hr}:0${mn}:${sc}`
            }
            if (sc < 10) {
                clock = `${hr}:${mn}:0${sc}`
            }
            document.getElementById(elementID).innerHTML = clock;

        }, 1000)
    }
}
export { TimeUtility }