function slow(x) {
    console.log(`Called with ${x}`);
    return x * 2352525 ** 2;
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

sl = cachingDecorator(slow);
f = cachingDecorator(fib);

// console.log(sl(34)); // slow(1) кешируем
// console.log("Again: " + sl(34)); // возвращаем из кеша

// console.log(sl(57)); // slow(2) кешируем
// console.log("Again: " + sl(57)); // возвращаем из кеша

console.log(f(41));
console.log(f(42));
console.log("Again: " + f(41)); // возвращаем из кеша
console.log("Again: " + f(42)); // возвращаем из кеша
