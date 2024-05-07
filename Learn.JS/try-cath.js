// let json = "{ некорректный JSON }";

// try {
//     let user = JSON.parse(json); // <-- тут возникает ошибка...
//     console.log(user.name); // не сработает
// } catch (e) {
//     // ...выполнение прыгает сюда
//     console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз.");
//     console.log(e.name);
//     console.log(e.message);
// }

// let json1 = '{ "age1": 30 }'; // данные неполны

// try {
//     let user = JSON.parse(json1); // <-- выполнится без ошибок

//     if (!user.age) {
//         throw new SyntaxError("Данные неполны: нет возраста"); // (*)
//     }
//     if (!user.name) {
//         throw new SyntaxError("Данные неполны: нет имени"); // (*)
//     }
//     console.log(user.name);
// } catch (e) {
//     console.log("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
// }
//=====================
// let json = '{ "name": "Alex", "ge": 30 }'; // данные неполны
// try {
//     let user = JSON.parse(json);

//     if (!user.name || !user.age) {
//         throw new SyntaxError("Данные неполны: нет ");
//         throw new Error("Данные неполны: нет ");
//     }

//     blabla(); // неожиданная ошибка

//     console.log(user.name);
// } catch (e) {
//     if (e.name == "SyntaxError") {
//         console.log("JSON Error: " + e.message);
//     } else {
//         throw e; // проброс (*)
//     }
// }
// =========================================
// function readData() {
//     let json = '{ "age": 30 }';

//     try {
//         let user = JSON.parse(json);

//         // if (!user.name) {
//         //     throw new SyntaxError("Данные неполны: нет имени");
//         // }
//         // if (!user.age) {
//         //     throw new SyntaxError("Данные неполны: нет возраста");
//         // }

//         blabla(); // ошибка!
//     } catch (e) {
//         if (e instanceof SyntaxError) {
//             console.log("JSON Error: " + e.message);
//         } else {
//             console.log("Неизвестная ошибка: " + e.message); // Изменено здесь
//         }
//         // Не пробрасываем ошибку дальше, чтобы не перехватывать её внешним catch
//     }
// }

// try {
//     readData();
// } catch (e) {
//     console.log("Внешний catch поймал: " + e); // Это сообщение не появится, если ошибка обработана внутри readData
// }

// function readData() {
//     let json = '{ "age": 30 }';

//     try {
//         let user = JSON.parse(json);

//         if (!user.name) {
//             throw new SyntaxError("Данные неполны: нет имени");
//         }
//     } catch (e) {
//         console.log("JSON Error: " + e.message);
//     }

//     try {
//         blabla(); // ошибка!
//     } catch (e) {
//         console.log("Неизвестная ошибка: " + e.message);
//     }
// }

// readData();

// let json = '{ "age": 30 }'; // данные неполны

// try {

//   let user = JSON.parse(json); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени"); // (*)
//   }

//   alert( user.name );

// } catch(e) {
//   alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
// }

let json = '{ "age": 30 }'; // данные неполны
try {
    let user = JSON.parse(json);

    blabla(); // неожиданная ошибка
    if (!user.name) {
        throw new SyntaxError("Данные неполны: нет имени");
    }

    console.log(user.name);
} catch (e) {
    if (e.name == "SyntaxError") {
        console.log("JSON Error: " + e.message);
    } else {
        console.log("Неизвестная ошибка");
        throw e;
    }
}
