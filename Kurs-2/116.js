"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products/");
request.send();

request.addEventListener("load", function () {
    const { products } = JSON.parse(this.responseText);

    const sum = products.reduce((acc, product) => ((acc += product.price), 0));
    console.log(products);
    console.log(sum);
});
