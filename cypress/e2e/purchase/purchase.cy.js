/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();

describe('Purchase', () => {
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Purchase with card', () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        cy.goToSelectProductsOffers();
        cy.addProductToCart();
        cy.buyProduct();
        cy.paymentWithCard("4000000000000010", "648", "Mariano O Da Silva", cpf);
    });

    it('Purchase with boleto', () => {
        cy.login("88609537234@mailinator.com", "senhaForte123@");
        cy.wait(5000);
        cy.goToTendaCardOffers();
        cy.addProductToCart();
        cy.buyProduct();
        cy.generateBoleto();
    });
});