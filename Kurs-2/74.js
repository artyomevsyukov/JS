"use strict";

class Car {
    #vin = 234234234234;
    #ChangeVin(vin) {
        this.#vin = vin;
        this.vin = this.#vin;
        console.log(this.#vin);
    }
    constructor(brend) {
        this.brend = brend;
    }
    changeVin(vin) {
        this.#ChangeVin(vin);
    }
}

const car = new Car("BMW");
console.log(car);
console.log(car.#vin);
