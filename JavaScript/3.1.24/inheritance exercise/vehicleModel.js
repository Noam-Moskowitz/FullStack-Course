class Vehicle {
    constructor() { }
    startDriving() {
        setTimeout(() => {
            console.log(`Started Driving`);
        }, 2000)
    }
    stopDriving() {
        setTimeout(() => {
            console.log(`Stopped Driving`);
        }, 3000)
    }
}
class Truck extends Vehicle {
    startDriving() {
        super.startDriving()
    }
    stopDriving() {
        super.stopDriving()
    }
}
class Car extends Vehicle {
    startDriving() {
        super.startDriving()
    }
    stopDriving() {
        super.stopDriving()
    }
}

class ElectricCar extends Car {
    startDriving() {
        super.startDriving()
        console.log(`Electric Car Is Starting Up`);
    }
    stopDriving() {
        super.stopDriving()
        console.log(`Eletric Car Is Stopping`);
    }
}
class PetrolCar extends Car {
    startDriving() {
        super.startDriving()
        console.log(`Petrol Car Is Starting Up`);
    }
    stopDriving() {
        super.stopDriving()
        console.log(`Petrol Car Is Stopping`);
    }
}

export {
    Vehicle,
    Car,
    ElectricCar,
    PetrolCar
}