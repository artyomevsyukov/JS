function getContainer() {
    return document.querySelector(".notify-container");
}

function createNotifyContainerTemplate() {
    return `
    <div class="notify-container" style="position: fixed; top: 15px; right: 15px;  z-index: 99;"></div>
    `;
}

function createNotifyContainer() {
    const template = createNotifyContainerTemplate();
    document.body.insertAdjacentHTML("afterbegin", template);
}

function alertTemplate(msg, className, index) {
    return `
    <div class="alert ${className}" data-index="${index}">${msg}</div>
    `;
}
function getAlertIndex() {
    return document.querySelectorAll(".notify-container .alert").length;
}

/**
 * Function notify. Show notification message
 * @param {Object} settings
 * @param {string} settings.msg
 * @param {string} settings.className
 * @param {number} settings.timeout
 */
export function notify({
    msg = "Info message",
    className = "alert-info",
    timeout = 2000,
} = {}) {
    if (!getContainer()) {
        createNotifyContainer();
    }
    const index = getAlertIndex();
    const template = alertTemplate(msg, className, index);
    const container = getContainer();
    container.insertAdjacentHTML("beforeend", template);

    setTimeout(() => closeNotify(index), timeout);
}

export function closeNotify(index) {
    let alert;

    if (index === undefined) {
        alert = document.querySelector(".notify-container .alert");
    } else {
        alert = document.querySelector(
            `.notify-container .alert[data-index="${index}"]`
        );
    }
    if (!alert) {
        console.log("Alert not found");
        return;
    }
    const container = getContainer();
    container.removeChild(alert);
}
