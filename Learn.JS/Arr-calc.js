function Calculator() {
    this.method = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function (str) {
        let split = str.split(" ");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (isNaN(a) || isNaN(b) || !this.method[op]) {
            return NaN;
        }
        return this.method[op](a, b);
    };
    this.addMethod = function (name, func) {
        this.method[name] = func;
    };
}

let calc = new Calculator();

console.log(calc.calculate("4 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("/", (a, b) => a / b);

console.log(powerCalc.calculate("7 ** 7"));
