function getCounter(nameCounter, value = 10) {
    let count = 0;

    return () => {
        return `${nameCounter} ${(count += 1)} ${(value += 1)}`;
    };
}

const counterOne = getCounter("counter one");
const counterTwo = getCounter("counter two");

console.log(counterOne());
console.log(counterOne());
console.log(counterOne());
console.log(counterTwo());
console.log(counterTwo());
