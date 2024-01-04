/// <reference types="cypress" />

describe('Registration and Login', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    })
    
    it('Registration', () => {
        cy.RegisterPhisicPerson("Mariano QA da Silva Senior", "14382781767", "usercomum@mailinator.com", "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}21940028922", "senhaForte123@");
    });

    /* it('Login', () => {
        
    }); */
});