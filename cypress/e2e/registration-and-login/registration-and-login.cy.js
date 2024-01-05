/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();
const  phone = Math.floor(Math.random() * 73451829765);
const serverId = 'mngiqzju';

describe('Registration and Login', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    });
    
    it('Registration', () => {
        cy.RegisterPhisicPerson("Mariano QA da Silva Senior", cpf, cpf+"@"+serverId+".mailosaur.net", "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}219"+phone, "senhaForte123@", serverId);
    });

    /* it('Login', () => {
        cy.login("66163283414@mailinator.com", "senhaForte123@");
    }); */
});