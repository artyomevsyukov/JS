function calc() {
    // Calc =========================================================

    const result = document.querySelector(".calculating__result span");

    let sex, ratio;
    let height, weight, age;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "famele";
        localStorage.setItem("sex", sex);
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", ratio);
    }

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "_____";
            return;
        }
        if (sex == "famale") {
            result.textContent = Math.floor(
                (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
            );
        } else {
            result.textContent = Math.floor(
                (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
            );
        }
    }

    function initLocalSettings(parentSelector, activeClass) {
        const elements = document.querySelectorAll(parentSelector);

        elements.forEach((el) => {
            el.classList.remove(activeClass);
            if (
                el.getAttribute("data-ratio") ===
                    localStorage.getItem("ratio") ||
                el.getAttribute("id") === localStorage.getItem("sex")
            ) {
                el.classList.add(activeClass); // Добавляем класс активности, если совпадает
            }
        });
    }

    initLocalSettings(
        ".calculating__choose-item",
        "calculating__choose-item_active"
    );
    initLocalSettings("#gender", "calculating__choose-item_active");

    function getStaticInformation(parentSelector, activeClass) {
        const parentElement = document.querySelector(parentSelector);
        const elements = document.querySelectorAll(`${parentSelector} div`);

        parentElement.addEventListener("click", (e) => {
            if (!e.target.classList.contains("calculating__choose-item"))
                return;

            if (e.target.getAttribute("data-ratio")) {
                ratio = +e.target.getAttribute("data-ratio");
                localStorage.setItem("ratio", ratio);
                console.log(ratio);
            } else {
                sex = e.target.getAttribute("id");
                localStorage.setItem("sex", sex);

                console.log(sex);
            }

            elements.forEach((elem) => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);
            calcTotal();
        });
    }

    // <input type="text" id="height" placeholder="Введите рост" class="calculating__choose-item">
    // <input type="text" id="weight" placeholder="Введите вес" class="calculating__choose-item">
    // <input type="text" id="age" placeholder="Введите возраст" class="calculating__choose-item">

    function getDinamicInformation(selector) {
        const element = document.querySelectorAll(`${selector} input`);
        const obj = {};
        element.forEach((el) => {
            el.addEventListener("input", (e) => {
                const regex = /^\d+$/;
                let id = el.id;
                if (regex.test(e.target.value)) {
                    obj[id] = +el.value;
                    console.log(obj);
                    ({ height, weight, age } = obj);
                    console.log("height, weight, age ", height, weight, age);
                    e.target.style.border = "";

                    calcTotal();
                } else {
                    e.target.style.border = "1px solid red";
                    result.textContent = "ОШИБКА";
                }
            });
        });
    }
    getStaticInformation("#gender", "calculating__choose-item_active");
    getStaticInformation(
        ".calculating__choose_big",
        "calculating__choose-item_active"
    );
    getDinamicInformation(".calculating__choose");
    calcTotal();
}

module.exports = calc;
