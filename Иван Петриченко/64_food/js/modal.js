const modal = document.querySelector(".modal"),
    modalcloseBtn = modal.querySelector("[data-close]"),
    modalTriger = document.querySelectorAll("[data-modal]");

function openModal() {
    // modal.classList.toggle("show");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
}

function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    window.removeEventListener("scroll", showModalbySroll);
}

export { openModal, closeModal };
