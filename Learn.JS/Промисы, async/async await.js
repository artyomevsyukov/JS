// async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// async function renderData() {
//     const arr = await getData("https://dummyjson.com/products/categories");
//     const el = document.createElement("div");
//     el.innerHTML = ` ${arr.forEach((element) => {
//         <span>${element.name}</span>;
//     })}
//     `;
//     body.append(el);
// }

// // Вызываем асинхронную функцию
// renderData();

console.log(1);
setTimeout(() => console.log(2));
setTimeout(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(3.1));
});
setTimeout(() => console.log(5));

Promise.resolve().then(() => console.log(4));
Promise.resolve(4.1).then((res) => console.log(res));

console.log(6);

//1,6
// 4
// 2
// 3
// 3.1
// 5
