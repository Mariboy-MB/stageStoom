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
const confirmationCode = () => cy.get('#code');
const maleGender = () => cy.get('.genders-select > :nth-child(2)');
const birthDay = () => cy.get('[data-cy="inpt-text-day"]');
const birthMonth = () => cy.get('[data-cy="inpt-text-month"]');
const birthYear = () => cy.get('[data-cy="inpt-text-year"]');
const slangAdress = () => cy.get('.col-sm-12 > #name');
const cep = () => cy.get('#zipCode');
const numberAdress = () => cy.get('#number');
const finishAccountRegistration =() => cy.get('.btn-create-account > [data-cy="btn-"]');

Cypress.Commands.add('RegisterPhisicPerson', (name, cpf, emailAddress, phone, password, serverId) => {
    acceptCookies().click();
    loginIcon().click();
    createAccountHomeScreen().click();
    personTypeAccount().click();
    nameField().type(name);
    cpfField().type(cpf);
    emailField().type(emailAddress);
    phoneField().type(phone);
    passwordOne().type(password);
    passwordtwo().type(password);
    createAccountregistrationScreen().click();
    
    cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress
    }).then(email => {
        expect(email.subject).to.equal('Confirmar cadastro - Código enviado');
        const code =  email.html.body.match(/\>(\w{6})\</)[1];
        confirmationCode().type(`${code}{enter}`);
    });

    maleGender().click();
    birthDay().type('26');
    birthMonth().type('04');
    birthYear().type('1994');
    slangAdress().type('casa');
    cep().type('13030-710');
    cy.wait(3000)
    numberAdress().type('1107');
    finishAccountRegistration().click();
});

Cypress.Commands.add('login', (emailOrCpf, password) => {
    acceptCookies().click();
    loginIcon().click();
    loginEmailOrCpf().type(emailOrCpf);
    loginPassword().type(password);
    loginButton().click();
});
