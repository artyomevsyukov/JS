import { formatDate } from "../date";

describe("Тест функции formatDate", () => {
    //Сценарий 1: тест
    it("Проверка формата даты", () => {
        expect(formatDate(1730191165600, "yyyy")).toBe("2024"); //
    });
});
