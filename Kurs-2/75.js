"use strict";

// const product = { id: 1, name: "bread", count: 1 };
// const product2 = { id: 2, name: "bear", count: 1 };

// const Cart = function () {
//     this.products = [];
//     this.addProduct = function (product) {
//         if (this.products.find((el) => el.id === product.id)) {
//             return;
//         }
//         this.products.push(product);
//     };
//     this.increaseAmount = function (id) {
//         this.products = this.products.map((product) => {
//             if (product.id == id) {
//                 product.count++;
//                 return product;
//             }
//             return product;
//         });
//     };
//     this.decreaseAmount = function (id) {
//         this.products = this.products
//             .map((product) => {
//                 if (product.id == id) {
//                     product.count--;
//                 }
//                 return product;
//             })
//             .filter((product) => product.count > 0);
//     };
// };

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

// const cart = new Cart();
// cart.addProduct(product);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.decreaseAmount(1);
// cart.decreaseAmount(1);
// cart.decreaseAmount(1);
// cart.decreaseAmount(1);
// cart.decreaseAmount(1);
// cart.addProduct(product);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.increaseAmount(1);
// cart.decreaseAmount(1);
// cart.addProduct(product2);
// cart.increaseAmount(2);
// console.log(cart);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const product = { id: 1, name: "bread", count: 1 };
// const product2 = { id: 2, name: "bear", count: 1 };

// function Cart() {
//     this.products = [];
// }
// Cart.prototype.addProduct = function (product) {
//     if (this.products.find((item) => item.id === product.id)) {
//         return;
//     }
//     this.products.push(product);
// };

// Cart.prototype.increaseAmount = function (id) {
//     this.products = this.products.map((product) => {
//         if (product.id == id) {
//             product.count++;
//             return product;
//         } else {
//             return product;
//         }
//     });
// };
// Cart.prototype.decreaseAmount = function (id) {
//     this.products = this.products
//         .map((product) => {
//             if (product.id == id) {
//                 product.count--;
//                 return product;
//             } else {
//                 return product;
//             }
//         })
//         .filter((product) => product.count > 0);
// };

// const cart = new Cart();
// cart.addProduct(product);
// cart.addProduct(product);
// cart.addProduct(product);
// cart.addProduct(product2);
// // console.log(cart);
// cart.increaseAmount(product.id);
// cart.increaseAmount(product.id);
// cart.increaseAmount(product2.id);
// cart.increaseAmount(2);
// cart.increaseAmount(2);
// cart.decreaseAmount(2);
// cart.decreaseAmount(2);
// cart.decreaseAmount(2);
// cart.decreaseAmount(2);
// console.log(cart);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const product = { id: 1, name: "bread", count: 1 };
const product2 = { id: 2, name: "bear", count: 1 };
const product3 = { id: 1, name: "bear", count: 1 };

class Cart {
    constructor() {
        this.product = [];
    }

    addProduct(prod) {
        if (this.product.find((product) => product.id === prod.id)) {
            return;
        }
        this.product.push(prod);
    }

    increaseAmount(id) {
        this.product = this.product.map((product) => {
            if (product.id === id) {
                product.count++;
                return product;
            } else {
                return product;
            }
        });
    }
    decreaseAmount(id) {
        this.product = this.product
            .map((product) => {
                if (product.id === id) {
                    product.count--;
                    return product;
                } else {
                    return product;
                }
            })
            .filter((product) => product.count > 0);
    }
}

const cart1 = new Cart();
cart1.addProduct(product);
cart1.addProduct(product2);
cart1.addProduct(product3);
console.log(cart1);
cart1.increaseAmount(2);
cart1.increaseAmount(2);
cart1.increaseAmount(2);
cart1.increaseAmount(1);
cart1.decreaseAmount(2);
cart1.decreaseAmount(2);
cart1.decreaseAmount(2);
cart1.decreaseAmount(2);
cart1.decreaseAmount(2);
console.log(cart1);
