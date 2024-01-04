/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();

const  phone = Math.floor(Math.random() * 73451829765);

describe('Registration and Login', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    })
    
    it('Registration', () => {
        cy.RegisterPhisicPerson("Mariano QA da Silva Senior", cpf, cpf+"@mailinator.com", "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}219"+phone, "senhaForte123@");
    });

    /* it('Login', () => {
        
    }); */
});