arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        console.log(arr);
        return arr[0] + sum(arr.slice(1));
    }
}
console.log(arr.slice(1));
console.log(arr.slice(2));
console.log(sum(arr));
