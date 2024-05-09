"use strict";

/*
	Реализовать класс пользователя, со свойствами
	- логин
	- пароль
	Причём пароль при установке должен переворачиваться
	и в таком виде храниться.
	Пароль и логин после создания изменить нельзя. Так же у
	класса добавить методы
	- Смены пароля (передаём старый и новый пароль)
	- Сверки пароля
*/

// class User {
//     #login;
//     #_password;

//     constructor(login, password) {
//         this.#login = login;
//         this.#password = password;
//     }

//     set #password(pass) {
//         this.#_password = pass.split("").reverse().join("");
//     }
//     get #password() {
//         return this.#_password.split("").reverse().join("");
//     }
//     get login() {
//         return this.#login;
//     }
//     checkPassword(pass) {
//         return this.#password === pass;
//     }
//     changePassword(oldPass, newPass) {
//         if (!this.checkPassword(oldPass)) {
//             return false;
//         }
//         this.#password = newPass;
//         return true;
//     }
// }

class User {
    #login;
    #_password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(pass) {
        this.#_password = pass.split("").reverse().join("");
    }
    get #password() {
        return this.#_password.split("").reverse().join("");
    }
    get login() {
        return this.#login;
    }
    checkPassword(pass) {
        return this.#password === pass;
    }
    changePassword(oldPass, newPass) {
        if (!this.checkPassword(oldPass)) {
            return "Пароль не соответствует";
            return false;
        }
        this.#password = newPass;
        return "Пароль изменен";
    }
}

let user = new User("c@bb.ru", "123");
console.log(user.login);
console.log(user.password);
// console.log(user);
// console.log(user.password);
// console.log("check", user.checkPassword("123"));
// console.log("check", user.checkPassword("123asdf"));
// console.log("change", user.changePassword("123", "1234"));
// console.log("check new pass ", user.checkPassword("1234"));
// console.log("check", user.checkPassword("123"));
// console.log("check", user.checkPassword("1234ывапыва"));
