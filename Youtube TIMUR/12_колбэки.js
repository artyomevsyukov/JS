// const add = (a, b) => a + b;
// const add = (a, b, callback) => callback(a + b);
// const res = add(2, 3, (call) => {
//     let cc = call + 2;
//     return cc;
// });
// console.log(res);

// const add = (a, b, callback) => {
//     if (!Number.isFinite(a) || !Number.isFinite(b)) {
//         callback(new Error("Invalid arguments"));
//         // return;
//     }
//     callback(null, a + b);
// };
// const res = add(5, 3, (error, result) => {
//     if (error) console.error(error);
//     console.log({ result });
//     // console.log(result);
// });

// const printA = (callback) => {
//     console.log("A");
//     callback();
// };
// const printB = (callback) => {
//     console.log("B");
//     callback();
// };
// const printC = (callback) => {
//     console.log("C");
//     callback();
// };

// const step1 = () => printA(step2);
// const step2 = () => printB(step3);
// const step3 = () => printA(step4);
// const step4 = () => printC(step5);
// const step5 = () => printB(step6);
// const step6 = () => console.log("END");

// step1();

const timer = setInterval(() => {
    console.log("callback 1");
}, 10);
// setInterval(() => {
//     console.log("callback 2");
// }, 15);
// setInterval(() => {
//     console.log("callback 3");
// }, 20);
setTimeout(() => {
    console.log("calback #2");
    clearInterval(timer);
}, 50);
