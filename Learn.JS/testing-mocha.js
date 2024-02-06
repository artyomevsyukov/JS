let array = [4, 1, 3, 3, 9, 3, 2, 4];

function grup(array) {
    let result = [];

    array.forEach((a) => {
        a in this || result.push((this[a] = []));
        this[a].push(a);
    }, {});
    // console.log(result);
    return result;
}

grup(array);
