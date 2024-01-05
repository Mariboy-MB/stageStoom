/// <reference types="cypress" />
import { generate } from 'gerador-validador-cpf'

const cpf = generate();
const  phone = "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}219" + Math.floor(Math.random() * 73451829765);
const serverId = 'mngiqzju';
const senha = 'senhaForte123@';
const emailAddress = cpf+"@"+serverId+".mailosaur.net";
const name = "Mariano QA da Silva Senior";

describe('Registration and Login', () => {
    
    beforeEach(()=>{
        cy.visit('/');
    });
    
    it('Registration', () => {
        cy.RegisterPhisicPerson(name, cpf, emailAddress, phone, senha, serverId);
    });

    it('Login', () => {
        cy.login(cpf, senha);
    });
});
