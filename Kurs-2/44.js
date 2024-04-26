"use strict";
function randomInterval(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
console.log(randomInterval(10, 20));
