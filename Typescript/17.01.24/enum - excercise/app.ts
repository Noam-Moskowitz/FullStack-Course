enum VEHICLE_STATUS{
    CHECKED_IN=1,
    DIAGNOSING,
    FIXING,
    READY
}

class CarInGarage{
    make:string;
    color:string;
    status:VEHICLE_STATUS;
    constructor(make:string,color:string){
        this.make=make;
        this.color=color
        this.status=VEHICLE_STATUS.CHECKED_IN;
        
    }

    changeStatus(status:VEHICLE_STATUS){
    switch (status) {
    case VEHICLE_STATUS.CHECKED_IN:
        this.status=VEHICLE_STATUS.DIAGNOSING
        break;
    case VEHICLE_STATUS.DIAGNOSING:
        this.status=VEHICLE_STATUS.FIXING
        break;
    case VEHICLE_STATUS.FIXING:
        this.status=VEHICLE_STATUS.READY
        break;
    }
    }

    printStatus(){
        console.log(this.status);
        
    }

    loop(){
    let randomNum:number = Math.floor(Math.random()*4);  
    this.status=randomNum;
    console.log(this.status);
    
     
    }

}

const car1 = new CarInGarage(`Subaru`,`Red`);
car1.changeStatus(car1.status)
car1.loop()
const car2 = new CarInGarage(`Volvo`,`Blue`);
const car3 = new CarInGarage(`Mazda`,`Green`);