/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();
const  phone = "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}219" + Math.floor(Math.random() * 73451829765);
const serverId = 'mngiqzju';
const senha = 'senhaForte123@';
const emailAddress = cpf+"@"+serverId+".mailosaur.net";
const name = "Mariano QA da Silva Senior";

describe('Register and Cart', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    });

    it("Add and remove Tenda product", () => {
        cy.RegisterPhisicPerson(name, cpf, emailAddress, phone, senha, serverId);
        cy.fillClickAndTakeCepBar();
        cy.wait(5000);
        cy.goToTendaCardOffers();
        cy.addProductToCart();
        cy.removeProductToCart();
    });

    it("Add and remove Other seller product", () => {
        cy.RegisterPhisicPerson(name, cpf, emailAddress, phone, senha, serverId);
        cy.fillClickAndTakeCepBar();
        cy.wait(5000);
        cy.goToSelectProductsOffers();
        cy.addProductToCart();
        cy.removeProductToCart();
    });
});
