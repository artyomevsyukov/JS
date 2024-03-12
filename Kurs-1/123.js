const obj = {
    k: "123",
};
// console.log(obj);
let str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(str));
