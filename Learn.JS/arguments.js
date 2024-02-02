function example(...args) {
    let max = Math.max(...args);
    return console.log(max);
}

example(1, 99, 2, 3, 44);
// Вывод: [1, 'two', true]
