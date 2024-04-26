"use strict";

let weatherMap = new Map([
    ["London", 12],
    ["Moscow", 7],
    ["Paris", 16],
    ["Berlin", 10],
]);

// weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
weatherMap = new Map(
    [...weatherMap].map((el) => ([el[0], el[1]] = [el[1], el[0]]))
);
console.log(weatherMap);
