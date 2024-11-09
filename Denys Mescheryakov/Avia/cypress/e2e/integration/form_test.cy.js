describe("Form", () => {
    it("Когда пользователь посещает главную страницу, форма должна быть видна", () => {
        cy.visit("http://localhost:5173");
        cy.get("[data-hook=mainForm]").should("be.visible");
    });
});
