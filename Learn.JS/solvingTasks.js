// async function asyncOperations() {
//     setTimeout(() => console.log("async done"), 10);
//     console.log("Async start");
//     await new Promise((resolve) => setTimeout(resolve, 20));
//     console.log("Async end");
// }
// asyncOperations();
// console.log("Async finish");

function eventHandling() {
    setTimeout(() => console.log("3-event fired"), 10);
    console.log("1-Event start");
    document.addEventListener("click", () => console.log("4-click event"));
}
eventHandling();
console.log("2-Event finish");
