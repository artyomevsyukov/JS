import ticketInstanse, { TicketUI } from "../tickets";
import currencyUI from "../currency";
import locations from "../../store/locations";
import ticketsUI from "../tickets";

jest.mock("../currency", () => {
    return {
        currencySymbol: "$", // замоканный символ валюты
    };
});
// data from fetchTickets(params)
// const params = {
//     origin: "LED",
//     destination: "MOW",
//     departDate: "2024-10-30",
//     returnDate: "2024-11-09",
//     currency: "RUB",
// };

// // {
// //     "origin": "LED",
// //     "destination": "MOW",
// //     "airline": "UT",
// //     "departure_at": "05 Nov 2024 21:30",
// //     "return_at": "28 Nov 2024 19:10",
// //     "expires_at": "2024-11-05T09:46:32Z",
// //     "price": 5644,
// //     "flight_number": 382,
// //     "transfers": 0,
// //     "origin_name": "Санкт-Петербург",
// //     "destination_name": "Москва",
// //     "airline_logo": "https://pics.avs.io/200/200/UT.png",
// //     "airline_name": "Utair"
// // }

// {
//     "origin": "LED",
//     "destination": "MOW",
//     "airline": "FZ",
//     "departure_at": "27 Oct 2025 00:30",
//     "return_at": "30 Oct 2025 23:30",
//     "expires_at": "2024-11-05T12:08:55Z",
//     "price": 208002,
//     "flight_number": 992,
//     "transfers": 1,
//     "origin_name": "Санкт-Петербург",
//     "destination_name": "Москва",
//     "airline_logo": "https://pics.avs.io/200/200/FZ.png",
//     "airline_name": "Flydubai"
// }

describe("TicketUI", () => {
    let ticketUI;

    beforeEach(() => {
        // Мокаем DOM-структуруц
        document.body.innerHTML = `<div class="tickets-sections"><div class="row"></div></div>`;
        // Создаем инстанс TicketUI перед каждым тестом
        ticketUI = new TicketUI();
    });

    test("должен создать экземпляр класса TicketUI", () => {
        // Проверяем, что ticketUI является экземпляром TicketUI
        expect(ticketUI).toBeInstanceOf(TicketUI);
    });

    test("должен инициализировать поля container и currency", () => {
        const expectedContainer = document.querySelector(
            ".tickets-sections .row"
        );
        expect(ticketUI.container).toBe(expectedContainer);

        // Проверяем, что currency взята из мока
        expect(ticketUI.currency).toBe("$");
    });
    test("Проверяем очистку контейнера", () => {
        // Заполняем контейнер с тестовым содержимым
        ticketUI.container.innerHTML = "Test Content";

        // Убедимся, что контейнер не пуст перед очисткой
        expect(ticketUI.container.innerHTML).not.toBe("");

        // Вызываем метод clearContainer
        ticketUI.clearContainer();

        // Проверяем, что контейнер теперь пуст
        expect(ticketUI.container.innerHTML).toBe("");
    });

    test("TicketUI.emptyMsgTemplate() должен возвращать корректную разметку для сообщения об отсутствии билетов", () => {
        // Ожидаемое значение HTML-разметки
        const expectedTemplate = `
        <div class="tickets-empty-res-msg">
            По вашему запросу билетов не найдено.
        </div>`;

        // Вызываем метод emptyMsgTemplate и проверяем результат
        expect(TicketUI.emptyMsgTemplate().trim()).toBe(
            expectedTemplate.trim()
        );
    });
    test("должен добавлять в контейнер сообщение об отсутствии билетов", () => {
        // Вызываем метод showEmptyMsg
        ticketUI.showEmptyMsg();

        // Ожидаемая разметка
        const expectedTemplate = `
        <div class="tickets-empty-res-msg">
            По вашему запросу билетов не найдено.
        </div>`.trim();

        // Проверяем, что содержимое контейнера соответствует ожидаемому шаблону
        expect(ticketUI.container.innerHTML.trim()).toBe(expectedTemplate);
    });
});
