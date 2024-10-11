const Product = function (brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function () {
        return (this.price * (100 - this.discount)) / 100;
    };
};

const apple = new Product("apple", 100, 10);
const xiaomi = new Product("xiaomi", 60, 15);

console.log(xiaomi.getPriceWithDiscount());
console.log(xiaomi.__proto__.constructor);

const poco = new xiaomi.__proto__.constructor("poco", 40, 5);
console.log(poco);
