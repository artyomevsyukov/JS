"use strict";

class Wallet {
    balance = 0;

    add(sum) {
        this.balance += sum;
        return this;
    }

    remove(sum) {
        this.balance -= sum;
        return this;
    }
}

const wallet = new Wallet();
const wallet2 = new Wallet();
let res1 = wallet.add(100).remove(10).add(10).remove(37);
let res2 = wallet2.add(100);
res2 = wallet2.add(50);
res2 = wallet2.remove(25);
console.log(res1);
console.log(res2);
