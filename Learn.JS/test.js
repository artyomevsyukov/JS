// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt("value?", 0);
//     };
// }

// let accumulator = new Accumulator(5);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// let arr = [1, 2, -3, "4", 5];
const items = [
    { price: "120" },
    { price: 505 },
    { price: 505 },
    { price: -350 },
    { price: "350" },
];
let result = items
    .filter((item) => typeof item.price === "number" && item.price > 0)
    .map((item) => +item.price)
    .reduce((sum, current) => (sum += current), 0);

console.log(result);
