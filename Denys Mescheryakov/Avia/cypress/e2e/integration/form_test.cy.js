// describe("Form", () => {
//     // beforeEach(() => {
//     //     // Открыть страницу один раз перед всеми тестами
//     //     cy.visit("http://localhost:5173");
//     // });

//     it("Когда пользователь посещает главную страницу, форма должна быть видна", () => {
//         cy.visit("http://localhost:5173");
//         cy.get("[data-hook=mainForm]").should("be.visible");
//     });
//     it("Когда пользователь вводит какое-то значение в автокомплит Origin, то этот автокомплит виден и соответствует введенному значению", () => {
//         // cy.visit("http://localhost:5173");
//         cy.get("[data-hook=autocompleteOrigin]").as("autocompleteOrigin");
//         // cy.get("@autocompleteOrigin").should("be.visible");
//         cy.get("@autocompleteOrigin").should("exist").and("be.visible");
//         cy.get("@autocompleteOrigin").type("Санкт-Петербург");
//         cy.get("@autocompleteOrigin").should("have.value", "Санкт-Петербург");
//     });
//     it("Когда пользователь вводит какое-то значение в автокомплит Destination, то этот автокомплит виден и соответствует введенному значению", () => {
//         // cy.visit("http://localhost:5173");
//         cy.get("[data-hook=autocompleteDestination]").as(
//             "autocompleteDestination"
//         );
//         cy.get("@autocompleteDestination").should("be.visible");
//         cy.get("@autocompleteDestination").type("Москва");
//         cy.get("@autocompleteDestination").should("have.value", "Москва");
//     });
// });

// ======================================================

// before(() => {
//     // Используем сессию, чтобы сохранить состояние между тестами
//     cy.visit("http://localhost:5173");
// });

// describe("Form", () => {
//     // before(() => {
//     //     // Используем сессию, чтобы сохранить состояние между тестами
//     //     cy.session("visit-form-page", () => {
//     //         cy.visit("http://localhost:5173");
//     //     });
//     // });

//     it("Когда пользователь посещает главную страницу, форма должна быть видна", () => {
//         cy.get("[data-hook=mainForm]").should("be.visible");
//     });

//     it("Когда пользователь вводит значение в автокомплит Origin, автокомплит виден и соответствует значению", () => {
//         cy.get("[data-hook=autocompleteOrigin]").as("autocompleteOrigin");
//         // Проверяем наличие элемента
//         cy.get("@autocompleteOrigin").should("exist").and("be.visible");
//         // Вводим значение и проверяем
//         cy.get("@autocompleteOrigin").type("Санкт-Петербург");
//         cy.get("@autocompleteOrigin").should("have.value", "Санкт-Петербург");
//     });

//     it("Когда пользователь вводит значение в автокомплит Destination, автокомплит виден и соответствует значению", () => {
//         cy.get("[data-hook=autocompleteDestination]").as(
//             "autocompleteDestination"
//         );

//         // Проверяем наличие элемента
//         cy.get("@autocompleteDestination").should("exist").and("be.visible");

//         // Вводим значение и проверяем
//         cy.get("@autocompleteDestination").type("Москва");
//         cy.get("@autocompleteDestination").should("have.value", "Москва");
//     });
// });

// ======================================================

describe("Form", () => {
    before(() => {
        cy.visit("http://localhost:5173");
    });

    it("Проходит по всей цепочке тестов без перезагрузки страницы", () => {
        // Проверка видимости формы
        cy.get("[data-hook=mainForm]").should("be.visible");

        // Проверка первого автокомплита Origin
        cy.get("[data-hook=autocompleteOrigin]").as("autocompleteOrigin");
        cy.get("@autocompleteOrigin").should("be.visible");
        cy.get("@autocompleteOrigin").type("Санкт-Петербург");
        cy.get("@autocompleteOrigin").should("have.value", "Санкт-Петербург");

        // Проверка второго автокомплита Destination
        cy.get("[data-hook=autocompleteDestination]").as(
            "autocompleteDestination"
        );
        cy.get("@autocompleteDestination").should("be.visible");
        cy.get("@autocompleteDestination").type("Москва");
        cy.get("@autocompleteDestination").should("have.value", "Москва");
    });
});
