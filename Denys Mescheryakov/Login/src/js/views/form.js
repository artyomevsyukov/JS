/**
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
    return `
    <div class="invalid-feedback">
        ${msg}
    </div>
`;
}

/**
 *
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || "Invalid input";
    const template = inputErrorTemplate(msg);
    el.classList.add("is-invalid");
    parent.insertAdjacentHTML("beforeend", template);
}

export function showInputValid(el) {
    el.classlist.add("valid-feedback");
}

/**
 *
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
    const parent = el.parentElement;

    const errors = parent.querySelectorAll(".invalid-feedback");
    if (errors.length === 0) return;

    el.classList.remove("is-invalid");
    errors.forEach((err) => parent.removeChild(err));
}
