function createTooltip(text) {
    const tooltip = document.createElement("span");
    tooltip.textContent = text;
    tooltip.classList.add("tooltip");

    return tooltip;
}

document.addEventListener("mouseover", (event) => {
    const { target } = event;
    const isOverDeleteButton = target.className.includes(
        "task-item__delete-button"
    );
    if (isOverDeleteButton) {
        // console.log("sucsess");

        const taskItemHtml = target.closest(".task-item");
        const taskId = taskItemHtml?.dataset.taskId;
        // console.log(taskItemHtml);

        if (taskId) {
            const tooltipHtml = createTooltip(
                `Удалить задачу под номером ${taskId}?`
            );
            target.append(tooltipHtml);
            // const taskText = document.querySelector(".task-item__text");
            // taskText.append(tooltipHtml);
        }
    }
});

document.addEventListener("mouseout", (event) => {
    const { target } = event;
    const isOutFromDeleteButton = target.className.includes(
        "task-item__delete-button"
    );
    if (isOutFromDeleteButton) {
        // console.log("Out");
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.remove();
        }
    }
});

// change

function checkTaskInputValidation(value) {
    if (!value || value.includes("@")) {
        return false;
    }
    return true;
}

const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = document.querySelector(".create-task-block__input");
const newMessageBlock = document.createElement("span");

taskNameInput.addEventListener("input", (event) => {
    // taskNameInput.addEventListener("change", (event) => {
    const { target } = event;
    const { value } = target;
    console.log(value);

    const isValid = checkTaskInputValidation(value);
    if (isValid) {
        newMessageBlock.remove();
    }
    if (!isValid) {
        console.log("ERROR");
        newMessageBlock.classList.add("error-message-block");
        newMessageBlock.textContent =
            'Ошибка Форма должна быть заполнена и в форме не должно быть "@"';
        createTaskBlock.append(newMessageBlock);
    }
});
