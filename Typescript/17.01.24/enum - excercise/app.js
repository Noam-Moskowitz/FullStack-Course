"use strict";
var VEHICLE_STATUS;
(function (VEHICLE_STATUS) {
    VEHICLE_STATUS[VEHICLE_STATUS["CHECKED_IN"] = 1] = "CHECKED_IN";
    VEHICLE_STATUS[VEHICLE_STATUS["DIAGNOSING"] = 2] = "DIAGNOSING";
    VEHICLE_STATUS[VEHICLE_STATUS["FIXING"] = 3] = "FIXING";
    VEHICLE_STATUS[VEHICLE_STATUS["READY"] = 4] = "READY";
})(VEHICLE_STATUS || (VEHICLE_STATUS = {}));
class CarInGarage {
    constructor(make, color) {
        this.make = make;
        this.color = color;
        this.status = VEHICLE_STATUS.CHECKED_IN;
    }
    changeStatus(status) {
        switch (status) {
            case VEHICLE_STATUS.CHECKED_IN:
                this.status = VEHICLE_STATUS.DIAGNOSING;
                break;
            case VEHICLE_STATUS.DIAGNOSING:
                this.status = VEHICLE_STATUS.FIXING;
                break;
            case VEHICLE_STATUS.FIXING:
                this.status = VEHICLE_STATUS.READY;
                break;
        }
    }
    printStatus() {
        console.log(this.status);
    }
    loop() {
        let randomNum = Math.floor(Math.random() * 4);
        this.status = randomNum;
        console.log(this.status);
    }
}
const car1 = new CarInGarage(`Subaru`, `Red`);
car1.changeStatus(car1.status);
car1.loop();
const car2 = new CarInGarage(`Volvo`, `Blue`);
const car3 = new CarInGarage(`Mazda`, `Green`);
