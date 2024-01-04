/// <reference types="cypress" />

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
    quantityLessOne().click();
    cy.wait(5000);
});