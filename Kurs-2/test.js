// const now = new Date();

// console.log(now.getDay());
// console.log(new Date().getDay());
// console.log(new Date().getDate());
// console.log(performance.now());

// let date = new Date(2014, 11, 31, 12, 0);
let date = new Date();

console.log(date.toLocaleString("ru", { year: "numeric", month: "long" })); // Декабрь 2014
console.log(
    date.toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
);
console.log(
    date.toLocaleTimeString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    })
);
console.log(date.toLocaleString("ru", { year: "numeric", month: "long" })); // Декабрь 2014

// weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric"

// hour: "numeric",
//   minute: "numeric",
//   second: "numeric"
