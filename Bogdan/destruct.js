let arr = [1, 2, 3, 4, 5];

let [one, two, ...other] = arr.reverse();
arr.reverse();
console.log(arr); // 5,4,3,2,1
console.log(one);
console.log(two);
console.log(other);
