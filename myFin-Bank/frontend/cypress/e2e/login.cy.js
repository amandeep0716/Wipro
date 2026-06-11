describe("MyFin Admin Login", () => {
  it("logs in successfully", () => {
    cy.visit("http://localhost:5173");

    cy.get('input[type="email"]').type("admin@gmail.com");
    cy.get('input[type="password"]').type("admin123");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "admin");
  });
});