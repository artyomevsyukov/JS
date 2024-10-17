const UI = {
    form: document.forms["loginForm"],
    inputEmail: document.getElementById("email"),
    inputPassword: document.getElementById("password"),
};

// const UI = {
//     form: document.forms["loginForm"],

//     get formData() {
//         return new FormData(this.form);
//     },

//     get inputEmail() {
//         return this.formData.get("email");
//     },

//     get inputPassword() {
//         return this.formData.get("password");
//     },
// };

export default UI;
