"use strict";

function changeBalance(key, surname) {
    let ballance = 0;
    key = key + 1;
    let name = "sdf";
    let age = 25;
    surname = surname;
    return function (sum, surname) {
        ballance += sum;
        let user = surname;
        key;
        name;
        // console.log(arguments);
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(user);
        console.log(`Бфланс изменен на ${sum}`);
    };
}

const change = changeBalance();
change(100, 2);
change(200, 3);
console.dir(change);

const change2 = changeBalance("Ключ", "Artem");
change2(333, "vel1");
change2(111, "vel");
console.dir(change2);
