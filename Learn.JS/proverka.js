function slow(n) {
    console.log(`Called with ${n}`);
    return n * 21 * 12;
}

const obj = {
    slow(n) {
        console.log(`OBJ Called with ${n}`);
        return n * 21 * 12;
    },
};

function decoratorCLG(func) {
    return function (n) {
        let result = func(n);
        return console.log(result);
    };
}

slow = decoratorCLG(slow);
obj.slow = decoratorCLG(obj.slow);

// slow(27);
slow(33);
obj.slow(32);
// console.log(slow(12));
