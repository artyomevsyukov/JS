Вот 10 задач, похожих на предыдущую, но с постепенным усложнением:

Простая последовательность:

javascript
Copy code
function simpleSequence() {
    setTimeout(() => console.log("world"), 10);
    console.log("John");
    console.log("Doe");
}
simpleSequence();
console.log("Smith");
Использование вложенных функций:

javascript
Copy code
function nestedFunctions() {
    setTimeout(() => console.log("bye"), 10);
    function innerFunction() {
        console.log("Inner");
    }
    innerFunction();
    console.log("Outer");
}
nestedFunctions();
console.log("Outermost");
Callback функции:

javascript
Copy code
function callbackExample(callback) {
    setTimeout(() => console.log("callback"), 10);
    console.log("Start");
    callback();
    console.log("End");
}
callbackExample(() => console.log("done"));
console.log("Finish");
Асинхронные операции:

javascript
Copy code
async function asyncOperations() {
    setTimeout(() => console.log("async done"), 10);
    console.log("Async start");
    await new Promise(resolve => setTimeout(resolve, 20));
    console.log("Async end");
}
asyncOperations();
console.log("Async finish");
Promises:

javascript
Copy code
function promisesExample() {
    Promise.resolve().then(() => console.log("promise resolved"));
    console.log("Promise start");
    Promise.resolve().then(() => console.log("another promise"));
}
promisesExample();
console.log("Promise finish");
Обработка событий:

javascript
Copy code
function eventHandling() {
    setTimeout(() => console.log("event fired"), 10);
    console.log("Event start");
    document.addEventListener("click", () => console.log("click event"));
}
eventHandling();
console.log("Event finish");
Асинхронный файловый доступ:

javascript
Copy code
async function fileAccess() {
    setTimeout(() => console.log("file read"), 10);
    console.log("File start");
    await fetch("example.txt").then(response => console.log("file loaded"));
}
fileAccess();
console.log("File finish");
Глубокая вложенность:

javascript
Copy code
function deepNesting() {
    setTimeout(() => console.log("deep done"), 10);
    console.log("Deep start");
    function nested1() {
        console.log("Nested 1");
        function nested2() {
            console.log("Nested 2");
        }
        nested2();
    }
    nested1();
}
deepNesting();
console.log("Deep finish");
Асинхронная обработка массива:

javascript
Copy code
async function asyncArrayProcessing() {
    setTimeout(() => console.log("processing done"), 10);
    console.log("Processing start");
    const array = [1, 2, 3];
    for (const num of array) {
        await new Promise(resolve => setTimeout(() => {
            console.log(`Processed: ${num}`);
            resolve();
        }, 15));
    }
}
asyncArrayProcessing();
console.log("Processing finish");
Комбинация сложных сценариев:

javascript
Copy code
async function complexScenario() {
    setTimeout(() => console.log("scenario done"), 10);
    console.log("Scenario start");
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Inner promise resolved");
            resolve();
        }, 25);
    });
    const fetchData = async () => {
        await fetch("https://api.example.com/data").then(response => console.log("Data loaded"));
    };
    await fetchData();
    console.log("Scenario end");
}
complexScenario();
console.log("Scenario finish");
Каждая из этих задач представляет собой разные аспекты асинхронного программирования и может помочь вам лучше понять, как работают асинхронные операции в JavaScript.





