/// <reference types="cypress" />
import FirstPage from '../../support/PageObject/FirstPage'
import {And,Given,When,Then} from "cypress-cucumber-preprocessor/steps";
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

When(/^pressionar o enter$/, () => {
	pageObject.enterConteudo()
});

And(/^acessar a nova página$/, () => {
    cy.get('a').should('be.visible')
});

And(/^clicar no botão de carregar mais informações$/, () => {
    cy.get('.result--more__btn').click()
});

Then(/^deve-se obter o resultado maior que 10 notícias$/, () => {
    expect(pageObject.contadorDeResultados()).to.above(10)
});