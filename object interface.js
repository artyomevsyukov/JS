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
