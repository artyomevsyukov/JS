// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" },
// ];
// let isRead = Symbol("isRead");
// messages[0][isRead] = true;
// let readMessages = new WeakSet();

// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// console.log("Read message 0: " + readMessages.has(messages[0])); // true

// // console.log(messages[0]);
// console.log(messages);
// messages.shift();
// console.log(messages);
// // messages.shift();
// // console.log(messages);

// function date() {
//     let dateNow = new Date();
//     return dateNow;
// }

// let readMessagesDate = new WeakMap();
// // readMessagesDate.set(messages[0], date());
// readMessagesDate.set(messages[0], new Date(2017, 1, 1));
// console.log(readMessagesDate);

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let readMap = new weakMap();
let date = new Date();
readMap.set(messages[0], date);
// console.log(readMap.get(messages[0]));
// console.log(readMap);
console.log(readMap.keys());
console.log(readMap.values());
console.log(readMap.entries());
