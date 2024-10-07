document.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs");
    const slider = require("./modules/slider");
    const calc = require("./modules/calc");
    const timer = require("./modules/timer");
    const forms = require("./modules/forms");
    const cards = require("./modules/cards-1");
    const modal = require("./modules/modal-1");

    tabs();
    slider();
    calc();
    forms();
    timer();
    cards();
    modal();
});
