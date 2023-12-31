class TimeUtility {
    constructor() {
    }

    createTimer(elementID) {
        setInterval(() => {
            const date = new Date();
            const hr = date.getHours().toString().padStart(2, `0`);
            const mn = date.getMinutes().toString().padStart(2, `0`);
            const sc = date.getSeconds().toString().padStart(2, `0`);
            let clock = `${hr}:${mn}:${sc}`

            document.getElementById(elementID).innerHTML = clock;

        }, 1000)
    }
}
export { TimeUtility }