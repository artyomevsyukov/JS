"use strict";
// class Enemy {
//     constructor(hp) {
//         this._hp = hp;
//         this.status = "live";
//     }

//     get hp() {
//         return this._hp;
//     }

//     set hp(hp) {
//         this._hp = hp;
//         if (this._hp <= 0) {
//             this.status = "dead";
//             console.log("Противник мертв");
//         }
//     }

//     // receiveDamage(damage) {
//     //     if (this.status === "live") {
//     //         this.hp -= damage;
//     //         console.log("Мы получили урон, осталось жизней: ", this.hp);
//     //     }
//     // }
//     receiveDamage(damage) {
//         if (this.status === "live") {
//             this.hp -= damage;
//             let message = `Мы получили урон, осталось жизней: ${this.hp}`;
//             console.log(message);
//             return message;
//         }
//     }
// }

// class Sword {
//     constructor(damage) {
//         this.damage = damage;
//     }

//     strike(enemy) {
//         if (enemy.status === "live") {
//             enemy.receiveDamage(this.damage);
//         } else {
//             console.log("Противник уже мертв");
//         }
//     }
// }

// class Orc extends Enemy {
//     receiveDamage(damage) {
//         if (Math.random() > 0.5) {
//             console.log("Орк увернулся");
//         } else {
//             super.receiveDamage(damage);
//         }
//     }
// }

// const iceSword = new Sword(70);
// const orcBarbarian = new Orc(150);
// const barbarian = new Enemy(100);

// //

// console.log(barbarian.hp);
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(barbarian.hp);
// console.log(barbarian.status);

// console.log(orcBarbarian);
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(orcBarbarian.hp);
// console.log(orcBarbarian.status);

// ===============================================================
class Enemy {
    #_hp;
    constructor(hp) {
        this.#hp = hp;
        this.status = "live";
    }
    get #hp() {
        return this.#_hp;
    }
    set #hp(hp) {
        this.#_hp = hp;
        if (this.#_hp <= 0) {
            this.status = "dead";
            console.log("Противник мертв", this.status);
        }
    }

    // receiveDamage(damage) {
    //     if (this.status === "live") {
    //         this.#hp -= damage;
    //         console.log("Мы получили урон, осталось жизней: ", this.#hp);
    //     }
    // }
    receiveDamage(damage) {
        if (this.status === "live") {
            this.#hp -= damage;
            let message = `Мы получили урон, осталось жизней: ${this.#hp}`;
            console.log(message);
            return message;
        }
        // return this;
    }
}

class Sword {
    constructor(damage) {
        this.damage = damage;
    }
    strike(enemy) {
        if (enemy.status === "live") {
            enemy.receiveDamage(this.damage);
        } else {
            console.log("Противник уже мертв");
        }
        return this; // Для цепочки вызовов iceSword.strike(orcBarbarian).strike(orcBarbarian).strike(orcBarbarian)
    }
}

class Orc extends Enemy {
    constructor(hp, armor) {
        super(hp);
        this.armor = armor;
    }

    receiveDamage(damage) {
        // if (Math.random() > 0.5) {
        //     console.log("Орк увернулся");
        // } else {
        const effectiveDamage = Math.max(0, damage - this.armor);
        console.log("effectiveDamage:", effectiveDamage);
        super.receiveDamage(effectiveDamage);
        // }
        // return this;
    }
}

const stick = new Sword(5);
const iceSword = new Sword(70);
const orcBarbarian = new Orc(150, 50);
const barbarian = new Enemy(100);

// console.log(barbarian.hp);
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(iceSword.strike(barbarian));
// console.log(barbarian.hp);
// console.log(barbarian.status);

console.log(orcBarbarian);
console.log(
    iceSword.strike(orcBarbarian).strike(orcBarbarian).strike(orcBarbarian)
);
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
// console.log(iceSword.strike(orcBarbarian));
console.log("hp:", orcBarbarian.hp);
console.log("status:", orcBarbarian.status);

class Human extends Enemy {}

let human = new Human(100);
console.log(stick.strike(human));
console.log(stick.strike(human));
console.log(stick.strike(human));
console.log(stick.strike(human));
