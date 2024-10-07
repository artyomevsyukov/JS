function modal() {
    //todo modal// Modal 43-44 ========================================================

    // const modal = document.querySelector(".modal"),
    //     modalcloseBtn = modal.querySelector(".modal__close");
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

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (target.matches("[data-modal]")) {
            openModal();
        }
        if (target.matches("[data-close]")) {
            closeModal();
        }
        // if (e.key === "Escape") {
        //     closeModal();
        // }

        // console.log(target);
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal && modal.classList.contains("show")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
    window.addEventListener("scroll", showModalbySroll);

    function showModalbySroll() {
        if (
            // window.pageYOffset
            // window.scrollY
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalbySroll);
        }
    }

    const modalTimerId = setTimeout(openModal, 12350000);
}

module.exports = modal;
