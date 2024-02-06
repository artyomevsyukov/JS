// function pow(x, n) {
//     return 8;
// }

function grup(array) {
    let result = [];

    array.forEach((a) => {
        a in this || result.push((this[a] = []));
        this[a].push(a);
    }, {});
    return result;
}
