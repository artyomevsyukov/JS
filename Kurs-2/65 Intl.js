// function pizzaTimer(ms) {
//     ms += 1;
//     const interval = setInterval(function go() {
//         ms -= 1;
//         ms < 10 ? console.log(`00:0${ms}`) : console.log(`00:${ms}`);
//         if (ms <= 0) {
//             clearInterval(interval);
//             console.log("Ура! Ваша пицца готова!");
//         }
//     }, 200);
// }

// function pizzaTimer(ms) {
//     // ms *= 1000;
//     const end = new Date().getTime() + ms;
//     const interval = setInterval(() => {
//         console.log(
//             new Intl.DateTimeFormat("ru-RU", {
//                 minute: "numeric",
//                 second: "numeric",
//             }).format(end + 100 - new Date().getTime())
//         );
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("Пицца готова!");
//     }, ms);
// }
function pizzaTimer(ms) {
    const end = new Date().getTime() + ms;
    const interval = setInterval(() => {
        console.log(
            // navigator.language - ru-RU
            new Intl.DateTimeFormat("ru-RU", {
                minute: "numeric",
                second: "numeric",
            }).format(end + 100 - new Date())
        );
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("Ваша пицца готова!!!");
    }, ms);
}
pizzaTimer(500000);
