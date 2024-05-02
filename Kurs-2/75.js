"use strict";

const product = { id: 1, name: "bread", count: 1 };
const product2 = { id: 2, name: "bear", count: 1 };

const Cart = function () {
    this.products = [];
    this.addProduct = function (product) {
        if (this.products.find((el) => el.id === product.id)) {
            return;
        }
        this.products.push(product);
    };
    this.increaseAmount = function (id) {
        this.products = this.products.map((product) => {
            if (product.id == id) {
                product.count++;
                return product;
            }
            return product;
        });
    };
    this.decreaseAmount = function (id) {
        this.products = this.products
            .map((product) => {
                if (product.id == id) {
                    product.count--;
                }
                return product;
            })
            .filter((product) => product.count > 0);
    };
};

// const Cart = function () {
//     this.products = [];
// };

// Cart.prototype.addProduct = function (product) {
//     if (this.products.find((el) => el.id === product.id)) {
//         return;
//     }
//     this.products.push(product);
// };
// Cart.prototype.increaseAmount = function (id) {
//     this.products = this.products.map((product) => {
//         if (product.id == id) {
//             product.count++;
//             return product;
//         }
//         return product;
//     });
// };
// Cart.prototype.decreaseAmount = function (id) {
//     this.products = this.products
//         .map((product) => {
//             if (product.id == id) {
//                 product.count--;
//             }
//             return product;
//         })
//         .filter((product) => product.count > 0);
// };

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
cart.decreaseAmount(1);
cart.addProduct(product);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.increaseAmount(1);
cart.decreaseAmount(1);
cart.addProduct(product2);
cart.increaseAmount(2);
console.log(cart);
