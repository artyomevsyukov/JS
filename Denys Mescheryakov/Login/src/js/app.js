// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//
import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError, showInputValid, removeInputError } from "./views/form";
import { login } from "./services/auth.service";

const { form, inputEmail, inputPassword } = UI;

const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((el) => removeInputError(el));
    onSubmit();
});

inputs.forEach((el) =>
    el.addEventListener("focus", () => removeInputError(el))
);

// Handlers
async function onSubmit() {
    // console.log("onSubmit");
    let isValidForm = true;

    inputs.forEach((el) => {
        const isVAlidInput = validate(el);

        if (!isVAlidInput) {
            showInputError(el);
            isValidForm = false;
        }
    });

    if (!isValidForm) return;

    try {
        const response = await login(inputEmail.value, inputPassword.value);

        if (response.ok) {
            form.reset();
            // show success notification
        } else {
            console.error("Ошибка аутентификации: ", response.statusText);
            console.log("Ошибка аутентификации: ", response.statusText);
        }
    } catch (error) {
        console.error("Ошибка авторизации: ", error.message);
        // show error notify
    }
}
