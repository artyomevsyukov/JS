// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//
import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError, showInputValid } from "./views/form";

const { form, inputEmail, inputPassword } = UI;

const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit();
});

// Handlers
function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isVAlidInput = validate(el);

        if (!isVAlidInput) {
            showInputError(el);
        }

        return isVAlidInput;
    });
    // return isValidForm;
    console.log(isValidForm);
}
