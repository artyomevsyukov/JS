// import { closeModal } from "./modal";

export async function postForm(form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const message = {
            load: "Загрузка",
            loading: "img/form/spinner.svg",
            success: "Спасибо! Скоро мы с вами свяжемся",
            failure: "Что-то пошло не так...",
        };

        // loader
        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
            display: flex;
            justify-content: center;
        `;
        form.append(statusMessage);

        // Создаем элемент изображения для отображения загрузки
        const loadingImg = document.createElement("img");
        loadingImg.style.cssText = `
        display: flex;
        margin: 0 auto;
        `;
        loadingImg.src = message.loading;
        form.append(loadingImg);

        // json с формы
        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        // console.log(json);

        try {
            const response = await fetch("server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: json,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                statusMessage.textContent = message.success;
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                    closeModal();
                }, 2000);
            } else {
                throw new Error(`${message.failure} ${response.status}`);
            }
        } catch (error) {
            statusMessage.textContent = message.failure;
            console.log("Ошибка запроса:", error.message);
        } finally {
            // Удаляем спиннер
            loadingImg.remove();
        }
    });
}

// function showThanksModal() {}
