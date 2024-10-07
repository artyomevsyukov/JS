import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import timer from "./modules/timer";
import cards from "./modules/cards";
import forms from "./modules/forms-1";
import modal from "./modules/modal-1";

document.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        12350000
    );

    tabs();
    slider();
    calc();
    forms();
    timer();
    cards();
    modal(".modal", modalTimerId);
});
