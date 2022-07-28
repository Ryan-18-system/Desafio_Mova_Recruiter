/// <reference types="cypress" />
import {And,Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import FirstPage from '../../support/PageObject/FirstPage'
const pageObject = new FirstPage()


Given(/^que o usuário queira acessar o DuckDuckGo$/, () => {
	pageObject.acessarPagina()
});

And(/^desejar realizar uma pesquisa sobre Bitcoin$/, () => {
	pageObject.acessarInput()
});

And(/^informar a pesquisa$/, () => {
	pageObject.conteudoInput('Últimas notícias sobre bitcoin')
});

When(/^clicar no ícone da lupa$/, () => {
	pageObject.clickLupa('Últimas notícias sobre bitcoin')
});

And(/^Acessar nova Página$/, () => {
	cy.get('a').should('be.visible')
});

Then(/^deve obter o resultado igual a 10 por página$/, () => {
	expect(pageObject.contadorDeResultados()).to.eq(10)
});