"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 03 JS
    // Tabs 38 =============================================================================
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabsContent = document.querySelectorAll(".tabcontent");
    const tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach((item) => {
            // item.style.display = "none";
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }
    function showTabsContent(i = 0) {
        // tabsContent[i].style.display = "block";
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabsContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        // if (target && target.classList.contains("tabheader__item")) {
        if (target && target.matches("div.tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });

    // Timer 41 =============================================================================

    let dedline = "2024-7-2";

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.now(),
            days = Math.floor(t / 1000 / 60 / 60 / 24),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return (num = "0" + num);
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(".timer", dedline);

    // Modal 43-44 ========================================================

    const modal = document.querySelector(".modal"),
        modalcloseBtn = modal.querySelector(".modal__close");
    // modalTriger = document.querySelectorAll("[data-modal]");

    function openModal() {
        modal.classList.toggle("show");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.toggle("show");
        document.body.style.overflow = "";
    }

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (target.matches("[data-modal]")) {
            openModal();
        }
        if (target == modalcloseBtn) {
            closeModal();
        }
        if (e.key === "Escape") {
            closeModal();
        }

        console.log(target);
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
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalbySroll);
        }
    }

    const modalTimerId = setTimeout(openModal, 15000);
});
