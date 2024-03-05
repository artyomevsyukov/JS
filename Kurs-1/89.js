"use strict";

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        // console.log(
        //     "Товар найлен: ",
        //     this.goods.find((g) => g.id == id)
        // );
        return this.goods.find((g) => g.id == id);
        // const existedGood = this.goods.find((g) => g.id == id);
        // return console.log(existedGood);
    },
    addGood(good) {
        if (this.findGoodById(good.id)) {
            console.log("Этот тавар уже есть на скалде", good);
            return;
        }
        // const existedGood = this.goods.find((g) => g.id == good.id);
        // if (existedGood) {
        //     console.log("Этот тавар уже есть на скалде");
        //     return;
        // }
        this.goods.push(good);
    },
    getWidthKg(obg) {
        return this.goods.reduce(
            (acc, el) => (acc += el.weigth?.kg ? el.weigth.kg : 0),
            0
        );
    },
};

const car = {
    id: 1,
    weigth: {
        kg: 1000,
    },
    brand: "Ford",
};

const chair = {
    id: 2,
    weigth: {
        kg: 2,
    },
};

const paper = {
    id: 3,
    color: "red",
};

//find()
//sum reduse

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
console.log("Найден товар: ", warehouse.findGoodById(1));
console.log("Найден товар: ", warehouse.findGoodById(2));
console.log("Найден товар: ", warehouse.findGoodById(3));
console.log("Общий вес: ", warehouse.getWidthKg());
