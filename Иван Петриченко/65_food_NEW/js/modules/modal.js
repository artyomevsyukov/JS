import { throttle } from "../services/throttle";

function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
    let modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(modalSelector, modalTimerId) {
    // Modal 43-44 ========================================================

    const modal = document.querySelector(modalSelector);

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (target.matches("[data-modal]")) {
            openModal(modalSelector, modalTimerId);
        }
        if (target.matches("[data-close]")) {
            closeModal(modalSelector);
        }
        if (e.key === "Escape") {
            closeModal(modalSelector);
        }
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal(modalSelector);
        }
    });
    function showModalbySroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalbySroll);
        }
    }
    window.addEventListener("scroll", throttle(showModalbySroll, 500));
}

export default modal;
export { closeModal, openModal };
