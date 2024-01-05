/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();
const  phone = "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}219" + Math.floor(Math.random() * 73451829765);
const serverId = 'mngiqzju';
const senha = 'senhaForte123@';
const emailAddress = cpf+"@"+serverId+".mailosaur.net";
const name = "Mariano QA da Silva Senior";

describe('Register and Purchase', () => {
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Purchase with card', () => {
        cy.RegisterPhisicPerson(name, cpf, emailAddress, phone, senha, serverId);
        cy.fillClickAndTakeCepBar();
        cy.wait(5000);
        cy.goToSelectProductsOffers();
        cy.addProductToCart();
        cy.jumpingBugAdress();
        cy.paymentWithCard("4000000000000010", "648", name, cpf);
    });

    it('Purchase with boleto', () => {
        cy.RegisterPhisicPerson(name, cpf, emailAddress, phone, senha, serverId);
        cy.fillClickAndTakeCepBar();
        cy.wait(5000);
        cy.goToTendaCardOffers();
        cy.addProductToCart();
        cy.jumpingBugAdress();
        cy.generateBoleto();
    });
});
