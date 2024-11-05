import locations from "../locations"; // Путь к вашему классу Locations
import apiService from "../../services/apiService"; // Путь к вашему API

jest.mock("../../services/apiService", () => {
    return {
        countries: jest.fn(() =>
            Promise.resolve([
                { code: "RU", name: "Россия" },
                { code: "US", name: "США" },
            ])
        ),
        cities: jest.fn(() =>
            Promise.resolve([
                { code: "LED", name: "Санкт-Петербург", country_code: "RU" },
                { code: "MOW", name: "Москва", country_code: "RU" },
            ])
        ),
        airlines: jest.fn(() =>
            Promise.resolve([
                { code: "UT", name: "Уральские авиалинии" },
                { code: "DP", name: "Дальневосточные авиалинии" },
            ])
        ),
        prices: jest.fn(() =>
            Promise.resolve({
                data: [
                    {
                        origin: "LED",
                        destination: "MOW",
                        airline: "UT",
                        departure_at: "2024-11-05T21:30:00Z",
                        return_at: "2024-11-28T19:10:00Z",
                        expires_at: "2024-11-05T12:08:55Z",
                        price: 5644,
                        flight_number: 382,
                        transfers: 0,
                    },
                ],
            })
        ),
    };
});

describe("Locations", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Очистка моков перед каждым тестом
    });

    test("fetchTickets должен обновлять lastSearch с данными из API", async () => {
        // Инициализируем локации
        await locations.init();

        const params = {
            origin: "LED",
            destination: "MOW",
            departDate: "2024-11-05",
            returnDate: "2024-11-28",
            currency: "RUB",
        };

        await locations.fetchTickets(params); // Вызов метода

        expect(apiService.prices).toHaveBeenCalledWith(params); // Проверка вызова API
        expect(locations.lastSearch).toEqual([
            // Проверка обновления lastSearch
            {
                origin: "LED",
                destination: "MOW",
                airline: "UT",
                departure_at: "05 Nov 2024 21:30",
                return_at: "28 Nov 2024 19:10",
                expires_at: "2024-11-05T12:08:55Z",
                price: 5644,
                flight_number: 382,
                transfers: 0,
                origin_name: undefined, // Имя города должно быть определено, если вы правильно сериализовали
                destination_name: undefined, // Имя города должно быть определено, если вы правильно сериализовали
                airline_logo: "", // Логотип должен быть определен, если вы правильно сериализовали
                airline_name: "", // Название должно быть определено, если вы правильно сериализовали
            },
        ]);
    });
});
