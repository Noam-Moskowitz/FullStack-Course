class TimeUtil {
    clock;

    constructor(tzIsraelOffset) {
        console.log(`Created a new instance of 'TimeUtil'`);
        this.clock= new Date();

        this.clock.setMinutes(this.clock.getMinutes()+(tzIsraelOffset*60));
    }

    displayTimerInDiv(divID) {
        let counter = 1;

        // Create an INTERVAL for continuous time updating
        setInterval(() => {
            const myDate = new Date();

            const hours = myDate.getHours().toString().padStart(2, '0');
            const minutes = myDate.getMinutes().toString().padStart(2, '0');
            const seconds = myDate.getSeconds().toString().padStart(2, '0');

            document.getElementById(divID).innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}
