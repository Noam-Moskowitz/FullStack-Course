import { Vehicle, Car, PetrolCar, ElectricCar } from "./vehicleModel.js";

function eventHandler() {
    const vehicle = new Vehicle();
    const car = new Car();
    const electricCar = new ElectricCar();
    const petrolCar = new PetrolCar();

    /*   let vehicArray = [vehicle, car, electricCar, petrolCar];
      for (let v of vehicArray) {
          v.startDriving()
          v.stopDriving()
          console.log(`  `);
      } */
    petrolCar.startDriving();
    petrolCar.stopDriving();
}

document.getElementById(`btn`).addEventListener(`click`, eventHandler)