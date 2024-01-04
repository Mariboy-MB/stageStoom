/// <reference types="cypress" />

const acceptCookies = () => cy.get('.disclaimer-container > [data-cy="btn-"]');
const loginIcon = () => cy.get('.text-hello');
const loginEmailOrCpf = () => cy.get('#login');
const loginPassword = () => cy.get('#password');
const loginButton = () => cy.contains('Continuar');
const createAccountHomeScreen = () => cy.contains('Criar conta');
const personTypeAccount = () => cy.get('[type="radio"]').check('fisica');
const nameField = () => cy.get('#nome');
const cpfField = () => cy.get('#cpf');
const emailField = () => cy.get('#email');
const phoneField = () => cy.get('#cellphone');
const passwordOne = () => cy.get('#password');
const passwordtwo = () => cy.get('#password2');
const createAccountregistrationScreen = () => cy.get('.btn-create-account');

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

Cypress.Commands.add('login', (emailOrCpf, password) => {
    acceptCookies().click();
    loginIcon().click();
    loginEmailOrCpf().type(emailOrCpf);
    loginPassword().type(password);
    loginButton().click();
});
