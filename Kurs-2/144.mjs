class ProductRepository {
    async getProducts(id) {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/${id}`
            );
            const data = await response.json();
            // console.log(data.title);
            return data;
        } catch (error) {
            console.log("Ошибка " + error.message);
        }
    }
}

// const product = new ProductRepository();

// console.log("1");
// product
//     .getProducts(1)
//     .then((data) => console.log(data.title))
//     .catch((e) => console.log("Втрорая ошибка " + e.message))
//     .finally(console.log("FINALLY"));
// product.getProducts(2).then((data) => console.log(data.title));

// console.log("2");

// (async () => {
//     const product = new ProductRepository();
//     console.log("1");
//     await product.getProducts(1).then((data) => console.log(data.title));
//     await product.getProducts(2).then((data) => console.log(data.title));
//     await product.getProducts(3).then((data) => console.log(data.title));
//     console.log("2");
// })();

const product = new ProductRepository();
console.log("1");
await product.getProducts(1).then((data) => console.log(data.title));
await product.getProducts(2).then((data) => console.log(data.title));
await product.getProducts(3).then((data) => console.log(data.title));
const res = await product.getProducts(1);
console.log(res.title);
console.log("2");
