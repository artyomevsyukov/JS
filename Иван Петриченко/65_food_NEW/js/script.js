import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import timer from "./modules/timer";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import { openModal } from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        12350000
    );

    tabs(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active"
    );
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        field: ".offer__slider-inner",
        wrapper: ".offer__slider-wrapper",
    });
    calc();
    forms("form", modalTimerId);
    timer(".timer", "2024-12-31");
    cards();
    modal(".modal", modalTimerId);
});
