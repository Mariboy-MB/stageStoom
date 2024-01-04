/// <reference types="cypress" />

const selectLogo = () => cy.get('.select-logo');
const tendaCardOffers = () => cy.get(':nth-child(3) > .hot-link-name');

describe("Add and remove products", () => {
    beforeEach(()=>{
        cy.visit('/');
    });
    
    it("Tenda product", () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        tendaCardOffers().click();
        cy.addProductToCart();
    });

    it("Other seller products", () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        selectLogo().click();
        cy.addProductToCart();
    });
});
