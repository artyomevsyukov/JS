// Import our custom CSS
import "../scss/bootstrap.scss";
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//
import UI from "./config/ui.config";

const { form, inputEmail, inputPassword } = UI;

// Events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit();
});

// Handlers
function onSubmit() {}
