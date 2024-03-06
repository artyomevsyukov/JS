"use strict";
function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = "1";
    }
}

const admin = {
    login: "Artem",
    password: "123456789",
};

console.log(admin);
const resetPasswordadmin = removePassword.bind(admin, true);
resetPasswordadmin();
// const resetPasswordadmin = removePassword.bind(admin);
// resetPasswordadmin(true);
// const resetPasswordadmin = removePassword(() => true);
console.log(admin);
