// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//
import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError, showInputValid, removeInputError } from "./views/form";

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
function onSubmit() {
    const isValidForm = inputs.forEach((el) => {
        const isVAlidInput = validate(el);

        if (!isVAlidInput) {
            showInputError(el);
        }

        return isVAlidInput;
    });
    // return isValidForm;
    console.log(isValidForm);
}
