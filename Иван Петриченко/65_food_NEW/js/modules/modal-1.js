import { throttle } from "../serv/throttle";

function openModal(modalSelector, modalTimerId) {
    let modal = document.querySelector(modalSelector);

    // modal.classList.toggle("show");
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    window.removeEventListener("scroll", showModalbySroll);
}

function modal(modalSelector, modalTimerId) {
    // Modal 43-44 ========================================================

    // const modal = document.querySelector(".modal"),
    //     modalcloseBtn = modal.querySelector(".modal__close");
    const modal = document.querySelector(modalSelector),
        modalcloseBtn = modal.querySelector("[data-close]"),
        modalTriger = document.querySelectorAll("[data-modal]");

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (target.matches("[data-modal]")) {
            openModal(modalSelector, modalTimerId);
        }
        if (target.matches("[data-close]")) {
            closeModal(modalSelector);
        }
        // if (e.key === "Escape") {
        //     closeModal();
        // }

        // console.log(target);
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
    window.addEventListener("scroll", throttle(showModalbySroll, 500));

    function showModalbySroll() {
        if (
            // window.pageYOffset
            // window.scrollY
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalbySroll);
        }
    }
}

export default modal;
export { closeModal, openModal };
