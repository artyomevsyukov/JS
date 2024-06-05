"use strict";

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

// let json = '{ "age": 30 }'; // данные неполны
// try {
//     let user = JSON.parse(json);

//     blabla(); // неожиданная ошибка
//     if (!user.name) {
//         throw new SyntaxError("Данные неполны: нет имени");
//     }

//     console.log(user.name);
// } catch (e) {
//     if (e.name == "SyntaxError") {
//         console.log("JSON Error: " + e.message);
//     } else {
//         console.log("Неизвестная ошибка");
//         throw e;
//     }
// }
// ==========================================================================
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// // Использование;
// function readUser(json) {
//     let user = JSON.parse(json);
//     let errors = [];
//     let probel = " ";
//     if (!user.age) {
//         errors.push(" Нет поля: age");
//         // throw new ValidationError("Нет поля: age");
//     }
//     if (!user.name) {
//         errors.length > 0
// ? errors.push(probel + "Нет поля: name")
//             : errors.push("Нет поля: name");
//         // throw new ValidationError("Нет поля: name");
//     }
//     if (errors.length > 0) {
//         throw new ValidationError(errors);
//     }

//     return user;
// }

// // Рабочий пример с try..catch

// try {
//     let user = readUser('{ "ag": 25, "nae": "Alexia" }');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
//     } else if (err instanceof SyntaxError) {
//         // (*)
//         console.log("JSON Ошибка Синтаксиса: " + err.message);
//     } else {
//         throw err; // неизвестная ошибка, пробросить исключение (**)
//     }
// }
// ==========================================================================

// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//         // this.name = "FormatError";
//     }
// }

// let err = new FormatError("ошибка форматирования");

// console.log(err.message); // ошибка форматирования
// console.log(err.name); // FormatError
// console.log(err.stack); // stack

// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

// let json = '{ "age": 30 }'; // данные неполны
// let errorArr = [];
// try {
//     let a = 5;
//     console.log(a + b);
//     let user = JSON.parse(json); // <-- выполнится без ошибок
//     if (!user.name) {
//         // errorArr.push();
//         throw new SyntaxError("Данные неполны: нет имени");
//     }

//     console.log(user.name);
// } catch (e) {
//     console.log("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
// }
// console.log(errorArr);
// ====================================================================================

// const sample = {
//     name: "",
//     surname: "",
//     age: 32,
// };

// function validateUser(user, sample) {
//     let error = [];

//     for (const key of Object.keys(sample)) {
//         if (!(key in user)) {
//             error.push(`Отсутствует поле: ${key}`);
//         }
//     }
//     return error;
// }

// function readData() {
//     json = '{ "age": 30 })';
//     try {
//         let user = JSON.parse(json);
//         const error = validateUser(user, sample);

//         if (error.length > 0) {
//             throw new SyntaxError(error.join("\n"));
//         }
//     } catch (e) {
//         console.log(e.name);
//         if (e.name == "SyntaxError") {
//             console.log("JSON Error: Данные неполны: \n" + e.message);
//         } else {
//             throw e; // проброс (*)
//         }
//     }

//     try {
//         blabla();
//     } catch (e) {
//         console.log("Неизвестная ошибка: " + e.message);
//     }
// }

// try {
//     readData();
// } catch (e) {
//     console.log("Внешний catch поймал: " + e); // поймал!
// }

// ====================================================================================

"use strict";
const sample = {
    name: "",
    surname: "",
    age: 32,
};

function validateUser(user, sample) {
    let errors = [];

    for (const key of Object.keys(sample)) {
        if (!(key in user)) {
            errors.push(`Отсутствует поле: ${key}`);
        }
    }
    return errors;
}

function readData() {
    let json = '{ "age": 30 })'; // Ошибка в JSON
    let errors = []; // Массив для сбора ошибок

    try {
        let user = JSON.parse(json); // Попытка парсинга JSON
        errors = validateUser(user, sample); // Проверка полей объекта user
    } catch (e) {
        if (e instanceof SyntaxError) {
            // Если ошибка парсинга JSON, добавляем сообщение об ошибке в массив errors
            errors.push("Ошибка в формате JSON: " + e.message);
        } else {
            // Если ошибка не связана с парсингом JSON, пробрасываем её дальше
            throw e;
        }
    }

    // Выводим все собранные ошибки
    if (errors.length > 0) {
        console.log("Обнаружены ошибки:\n" + errors.join("\n"));
    }

    // Дополнительные действия, которые могут вызвать ошибки
    try {
        blabla(); // Ошибка, так как функция blabla не определена
    } catch (e) {
        console.log("Неизвестная ошибка: " + e.message);
    }
}

try {
    readData();
} catch (e) {
    console.log("Внешний catch поймал: " + e);
}
