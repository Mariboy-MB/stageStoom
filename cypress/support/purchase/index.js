/// <reference types="cypress" />

const cartScreenContinueButton = () => cy.get('.resume-buttons > .btn');
const chooseDeliveryTypeButton = () => cy.get('.btn-delivery').contains('Escolher forma de entrega');
const clickAndTake = () => cy.get('.tag');
const finishPurchaseButton = () => cy.get('.resume-buttons > .btn');
const firstAdress = () => cy.get('.list-branches > :nth-child(1)');
const dateToRight = () => cy.get('.direction-right > .fas');
const firstTime = () => cy.get('.content-periods > :nth-child(1)');
const boletoPaymentOption = () => cy.contains('Boleto bancário');
const payBoleto = () => cy.get('.btn-buy');
const seeBoleto = () => cy.get('.justify-content-start > .btn-primary');
const creditCardPaymentOption = () => cy.contains('Cartão de crédito');
const cardNumber = () => cy.get('#number');
const cardMonth = () => cy.get('#month > .react-select__control');
const cardMonthOpt4 = () => cy.get('#react-select-3-option-3');
const cardYear = () => cy.get('#year > .react-select__control');
const cardYearOpt4 = () => cy.get('#react-select-4-option-3');
const cvvField = () => cy.get('#cvv');
const cardName = () => cy.get('#name');
const cardCpf = () => cy.get('#cpf');
const parcelNumbers = () => cy.get('#installments > .react-select__control');
const oneParcelNumber = () => cy.get('#react-select-5-option-0');
const payWithCard = () => cy.get('.CreditCardComponent > [data-cy="btn-"]');
const deliveryChoose = () => cy.get('.delivery-price');
const myAdressInCart = () => cy.get('.subtitle-address-option');

Cypress.Commands.add('chooseDayToClickAndTake', () => {
    clickAndTake().click();
    firstAdress().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    firstTime().click();
});

Cypress.Commands.add('jumpingBugAdress', () => {
    cartScreenContinueButton().click();
    chooseDeliveryTypeButton().click();
    deliveryChoose().click();
    myAdressInCart().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    dateToRight().click();
    firstTime().click();
    cartScreenContinueButton().click();
});

Cypress.Commands.add('buyProduct', () => {
    cartScreenContinueButton().click();
    chooseDeliveryTypeButton().click();
    cy.chooseDayToClickAndTake();
    finishPurchaseButton().click();
});

Cypress.Commands.add('generateBoleto', () => {
    boletoPaymentOption().click();
    payBoleto().click();
    cy.wait(15000);
    seeBoleto().click();
});

Cypress.Commands.add('paymentWithCard', (number, cvv, name, cpf) => {
    creditCardPaymentOption().click();
    cardNumber().type(number);
    cardMonth().click();
    cardMonthOpt4().click();
    cardYear().click();
    cardYearOpt4().click();
    cvvField().type(cvv);
    cardName().type(name);
    cardCpf().type(cpf);
    parcelNumbers().click();
    oneParcelNumber().click();
    payWithCard().click();
    cy.wait(15000);
});