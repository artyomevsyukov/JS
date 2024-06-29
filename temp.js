"use strict";
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(10, 4);

const obj = {
    a: 5,
    b: 10,
    c: this,
    sum() {
        console.log(this);
        console.log(this.a + this.b);
        const show = () => {
            console.log("sfdsf", this);
        };
        show();
        function lostThis() {
            console.log("lostThis bindThis: ", this.a + this.b);
        }
        lostThis.call(obj);
        // let bindThis = lostThis.bind(obj);
        // bindThis();
    },
};

obj.sum(3, 4);
// console.log(obj.c);
