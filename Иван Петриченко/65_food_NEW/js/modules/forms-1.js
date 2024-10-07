import { closeModal, openModal } from "./modal-1";

function forms() {
    const forms = document.querySelectorAll("form");

    const message = {
        load: "Загрузка",
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...",
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    // const postData = () => {
    //     const res = fetch("http://localhost:3000/menu")
    //         .then((data) => data.json())
    //         .then((res) => console.log(res));
    //     return res;
    // };
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);
            const object = Object.fromEntries(formData.entries());
            object.date = new Date().toISOString().slice(0, 16);

            const json = JSON.stringify(object);
            // console.log(json);

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        openModal();
        prevModalDialog.classList.add("hide");

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
            `;
        // document.querySelector(".modal").append(thanksModal);
        modal.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }
}

export default forms;
