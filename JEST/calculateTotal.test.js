// const calculateTotal = require('./calculateTotal');
import calculateTotal from "./calculateTotal";

describe("calculateTotal", () => {
    // Сценарий 1: Тест без скидки (отсутствие купона)
    it("should return the sum of item prices without discount if no coupon is provided", () => {
        const items = [
            { price: 100, quantity: 2 },
            { price: 50, quantity: 1 },
        ];
        const result = calculateTotal(items);
        expect(result).toBe(250); // 100 * 2 + 50 = 250
    });

    // Сценарий 2: Тест с процентной скидкой
    it("should apply a percentage discount correctly", () => {
        const items = [
            { price: 100, quantity: 3 },
            { price: 50, quantity: 2 },
        ];
        const coupon = { type: "PERCENTAGE", value: 10 }; // Скидка 10%
        const result = calculateTotal(items, coupon);
        expect(result).toBe(360); // (100*3 + 50*2) * 0.9 = 360
    });

    // Сценарий 3: Тест с фиксированной скидкой
    it("should apply a fixed discount correctly", () => {
        const items = [
            { price: 200, quantity: 1 },
            { price: 50, quantity: 3 },
        ];
        const coupon = { type: "FIXED", value: 50 }; // Скидка 50 единиц
        const result = calculateTotal(items, coupon);
        expect(result).toBe(300); // 200 + (50 * 3) - 50 = 300
    });

    // Сценарий 4: Проверка, что итог не может быть отрицательным
    it("should return 0 if the discount exceeds the total sum", () => {
        const items = [{ price: 50, quantity: 1 }];
        const coupon = { type: "FIXED", value: 100 }; // Скидка больше суммы
        const result = calculateTotal(items, coupon);
        expect(result).toBe(0);
    });
});
