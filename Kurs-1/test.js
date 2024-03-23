const cities = {
    msk: {
        loc: 200,
        temp: 25,
    },
    spb: {
        loc: 100,
        // temp: 30,
    },
};

// let sumTemp = 0;
// let citiesCount = 0;
// for (let key in cities) {
//     citiesCount++;
//     sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount);

// function avgTemp(obj) {
//     let sumTemp = 0;
//     let citiesCount = Object.keys(obj).length;
//     // for (let key in obj) {
//     //     // citiesCount++;
//     //     sumTemp += obj[key].temp;
//     // }
//     for (let key of Object.keys(obj)) {
//         // citiesCount++;
//         console.log(key);
//         sumTemp += obj[key].temp || 0;
//     }
//     return sumTemp / citiesCount;
// }

// console.log(avgTemp(cities));

// let user = "dfsd";

// console.log(user ?? "Аноним");
// console.log(user || "Аноним");

// var a = 5;

// console.log(globalThis);

// ["Бильбо", "Гэндальф", "Назгул"].forEach((el) => console.log(el));

let arr = ["Бильбо", "Гэндальф", "Назгул"];

arr.forEach((el) => console.log(el));
let lengths = arr.map((item) => item.length);
console.log(lengths); // 6,8,6

console.log(arr);
