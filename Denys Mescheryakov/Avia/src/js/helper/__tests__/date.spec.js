import { formatDate } from "../date";

describe("Тест функции formatDate", () => {
    //Сценарий 1: тест
    it("Проверка формата даты год", () => {
        expect(formatDate(1730191165600, "yyyy")).toBe("2024"); //
    });
    it("Проверка формата даты месяц", () => {
        expect(formatDate(1730191165600, "MMM")).toBe("Oct"); //
    });
    it("Проверка формата даты день", () => {
        expect(formatDate(1730191165600, "dd")).toBe("29"); //
    });
});
