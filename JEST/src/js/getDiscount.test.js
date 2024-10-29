// getDiscount.test.js
import getDiscount from "./getDiscount";

describe("Проверка функции - getDiscount", () => {
    // Сценарий 1: Без купона
    it("should return 0 if no coupon is provided", () => {
        const result = getDiscount(100);
        expect(result).toBe(0);
    });

    // Сценарий 2: Процентная скидка
    it("should calculate percentage discount correctly", () => {
        const coupon = { type: "PERCENTAGE", value: 20 }; // 20% скидка
        const result = getDiscount(100, coupon);
        expect(result).toBe(20); // 20% от 100 = 20
    });

    // Сценарий 3: Фиксированная скидка
    it("should calculate fixed discount correctly", () => {
        const coupon = { type: "FIXED", value: 15 }; // Фиксированная скидка 15
        const result = getDiscount(100, coupon);
        expect(result).toBe(15); // Фиксированная скидка = 15
    });

    // Сценарий 4: Скидка превышает сумму
    it("should not allow discount to exceed the amount", () => {
        const coupon = { type: "FIXED", value: 150 }; // Фиксированная скидка 150
        const result = getDiscount(100, coupon);
        expect(result).toBe(100); // Скидка не может превышать сумму
    });
});
