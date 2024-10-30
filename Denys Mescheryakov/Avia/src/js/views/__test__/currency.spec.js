/**
 * @jest-environment jsdom
 */
import currencyUI, { CurrencyUI } from "../currency";

describe("CurrencyUI", () => {
    let currencyElement, currencyUI;

    beforeEach(() => {
        // Создаем элемент select и добавляем его в документ
        currencyElement = document.createElement("select");
        currencyElement.id = "currency";

        const optionRUB = document.createElement("option");
        optionRUB.value = "RUB";
        optionRUB.textContent = "₽ Руб";

        const optionUSD = document.createElement("option");
        optionUSD.value = "USD";
        optionUSD.textContent = "$ US Dollar";

        const optionEUR = document.createElement("option");
        optionEUR.value = "EUR";
        optionEUR.textContent = "€ Euro";

        currencyElement.append(optionRUB, optionUSD, optionEUR);
        document.body.appendChild(currencyElement);

        currencyUI = new CurrencyUI();
    });

    afterEach(() => {
        document.body.removeChild(currencyElement);
    });

    test("должен корректно инициализировать свойства", () => {
        expect(currencyUI.currency).toBe(currencyElement);
        expect(currencyUI.dictionary).toEqual({
            USD: "$",
            EUR: "€",
            RUB: "₽",
        });
    });

    test("должен возвращать корректное значение currncyValue", () => {
        currencyElement.value = "USD";
        expect(currencyUI.currncyValue).toBe("USD");
    });

    test("должен возвращать правильный символ для выбранной валюты", () => {
        currencyElement.value = "EUR";
        expect(currencyUI.currencySymbol).toBe("€");

        currencyElement.value = "USD";
        expect(currencyUI.currencySymbol).toBe("$");

        currencyElement.value = "RUB";
        expect(currencyUI.currencySymbol).toBe("₽");
    });

    test("должен возвращать undefined для неизвестной валюты", () => {
        currencyElement.value = "GBP";
        expect(currencyUI.currencySymbol).toBeUndefined();
    });
});
