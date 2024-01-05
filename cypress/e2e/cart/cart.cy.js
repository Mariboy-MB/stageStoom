/// <reference types="cypress" />

describe("Add and remove products", () => {
    beforeEach(()=>{
        cy.visit('/');
    });
    
    it("Tenda product", () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        cy.goToTendaCardOffers();
        cy.addProductToCart();
        cy.removeProductToCart();
    });

    it("Other seller products", () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        cy.goToSelectProductsOffers();
        cy.addProductToCart();
        cy.removeProductToCart();
    });
});
