const wallet = {
    balance: 0,
    operations: [],
    colOperation: 0,
    upBalance(reason, sum) {
        this.operations.push({ reason: reason, sum });
        this.balance += sum;
        this.colOperation++;
        console.log(this.operations);
        console.log(this.balance);
        return true;
    },
    downBalance(reason, sum) {
        this.colOperation++;
        if (this.balance >= sum) {
            this.operations.push({
                reason,
                sum: -sum,
            });
            console.log(this.operations);
            console.log(this.balance);
            this.balance -= sum;
            return true;
        } else {
            console.log("недостаточно средств");
            return false;
        }
    },
    getColOperation() {
        console.log(this.operations.length);
        return this.operations.length;
        console.log(`Текущий баланс ${this.balance}`);
        console.log(this.colOperation);
    },
};

wallet.upBalance("Пополнение баланса", 1000);
wallet.upBalance("Пополнение баланса", 2000);
wallet.upBalance("Пополнение баланса", 3000);
wallet.downBalance("Оплата КУ", 2700);
wallet.downBalance("Оплата Подписки", 3700);
wallet.getColOperation();
