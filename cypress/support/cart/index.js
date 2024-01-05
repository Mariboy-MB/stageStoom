/// <reference types="cypress" />

const selectLogo = () => cy.get('.select-logo');
const tendaCardOffers = () => cy.get(':nth-child(3) > .hot-link-name');
const addCartSecondItem = () => cy.get(':nth-child(2) > .card-item > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]');
const iconCart = () => cy.get('.icon-cart-ball');
const quantityLessOne = () => cy.get('.box-quantity > :nth-child(1)');
const nameField = () => cy.get('#nome');
const cpfField = () => cy.get('#cpf');
const emailField = () => cy.get('#email');


Cypress.Commands.add('addProductToCart', () => {
    addCartSecondItem().click();
    cy.scrollTo('topRight');
    cy.wait(5000);
    iconCart().click();
});

Cypress.Commands.add('removeProductToCart', () => {
    quantityLessOne().click();
    cy.wait(5000);
})

Cypress.Commands.add('goToTendaCardOffers', () => {
    tendaCardOffers().click();
});

Cypress.Commands.add('goToSelectProductsOffers', () => {
    selectLogo().click();
});
