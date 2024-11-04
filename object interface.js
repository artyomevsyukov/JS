//object interface

const say = (function () {
    const user = "Pit";
    function privat() {
        console.log(user);
    }
    return {
        sayPrivat: privat,
    };
})();

say.sayPrivat();
say.sayPrivat = function () {
    return "Upps...";
};
console.log(say.sayPrivat());
