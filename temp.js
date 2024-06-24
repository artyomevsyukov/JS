const obj = {
    name: "Bogdan",
    age: 33,
};

function copy(mainObj) {
    const copyObj = {};

    for (let key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}

console.log(copy(obj));

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 10,
    },
};
// let newNumbers = copy(numbers);
let newNumbers = { ...numbers };
let objAssign = Object.assign({}, numbers);
numbers.a = 10;
console.log(numbers);
console.log(newNumbers);

numbers.c.x = 111;
console.log(numbers);
console.log(newNumbers);
console.log(objAssign);
