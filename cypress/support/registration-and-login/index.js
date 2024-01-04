/// <reference types="cypress" />

const loginIcon = () => cy.get('.text-hello');
const createAccountHomeScreen = () => cy.contains('Criar conta');
const personTypeAccount = () => cy.get('[type="radio"]').check('fisica');
const nameField = () => cy.get('#nome');
const cpfField = () => cy.get('#cpf');
const emailField = () => cy.get('#email');
const phoneField = () => cy.get('#cellphone');
const passwordOne = () => cy.get('#password');
const passwordtwo = () => cy.get('#password2');
const createAccountregistrationScreen = () => cy.get('.btn-create-account');

Cypress.Commands.add('navigateToSite', () => {
    cy.visit('/');
});

Cypress.Commands.add('RegisterPhisicPerson', (name, cpf, email, phone, password) => {
    loginIcon().click();
    createAccountHomeScreen().click();
    personTypeAccount().click();
    nameField().type(name);
    cpfField().type(cpf);
    emailField().type(email);
    phoneField().type(phone);
    passwordOne().type(password);
    passwordtwo().type(password);
    createAccountregistrationScreen().click();
});
