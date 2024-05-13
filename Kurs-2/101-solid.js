"use strict";

const char = [];

class Character {
    #inventory = [];
    // #_hp;
    #hp;

    constructor(name, role, hp) {
        this.name = name;
        this.class = role;
        this.#hp = hp;
        this.stetus = "live";
    }

    pickItem(item) {
        this.#inventory.push(item);
    }

    recieveDamage(damage) {
        this.#hp -= damage;
    }
}

class Weapon {
    constructor(damage) {
        this.damage = damage;
    }
    strike(enemy) {
        if (enemy.status === "live") {
            enemy.receiveDamage(this.damage);
        } else {
            console.log("Противник уже мертв");
        }
    }
    shoot(enemy) {
        if (enemy.status === "live") {
            enemy.receiveDamage(this.damage);
        } else {
            console.log("Противник уже мертв");
        }
    }
}
// todo а если есть расстояние и меткость
class Sword extends Weapon {
    strike(enemy) {
        super.strike(enemy);
    }
}
class Crossbow extends Weapon {
    shoot(enemy) {
        super.strike(enemy);
    }
}

class DB {
    seva(item) {
        try {
            localStorage.setItem(item, JSON.stringify(item));
        } catch (error) {
            console.error("Ошибка при сохранении данных:", error);
            // Обработка ошибки, например, можно показать сообщение пользователю
        }
    }
    load(item) {
        try {
            const charString = localStorage.getItem(item);
            const charArray = JSON.parse(charString);
            if (Array.isArray(charArray)) {
                char = charArray;
            }
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            char = [];
        }
    }
}
const char1 = new Character("Gendalf", "mag", 200);
