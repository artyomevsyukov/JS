"use strict";

async function getAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
}

async function getProduct(id) {
    // const response = await fetch("https://dummyjson.com/products/" + id);
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    return response.json();
}
// getProduct(2);
// console.log(await getProduct(2));
// await getProduct(2).then((res) => console.log(res.id));
// await getProduct(2).then(console.log);

async function main() {
    const { products } = await getAllProducts();
    console.log(products);
    const res = await Promise.all(
        products.map((product) => getProduct(product.id))
    );
    // console.log(res);

    // for (const product of products) {
    //     const res = await getProduct(product.id);
    //     console.log(res.id);
    // }
}

main();
