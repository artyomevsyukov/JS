// function sayHi() {
//     phrase = "Привет"; // (*)
//     if (false) {
//         var phrase;
//     }

//     console.log(phrase);
// }
// sayHi();

function sayHi() {
    console.log(phrase);

    var phrase = "Привет";
}

sayHi();

(function () {
    var message = "Hello";

    console.log(message); // Hello
})();
