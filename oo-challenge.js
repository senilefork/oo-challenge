class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk(){
        return'Beep';
    };
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year,numWheels){
        super(make, model, year)
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year,numWheels){
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(maxCars) {
        this.vehicles = [];
        this.maxCars = maxCars
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if(this.vehicles.length >= maxCars){
        return "Sorry, we're full.";
    }
    if(this.vehicles.length < maxCars){
        this.vehicles.push(newVehicle);
        return "Vehicle added"
    }
    }
}