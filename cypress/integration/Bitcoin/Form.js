/// <reference types="cypress" />
import FirstPage from '../../support/PageObject/FirstPage'
import {And,Given,When,Then} from "cypress-cucumber-preprocessor/steps";
const pageObject = new FirstPage()


Given(/^que o usuário queira acessar o DuckDuckGo$/, () => {
	pageObject.acessarPagina()
});

And(/^desejar realizar uma pesquisa sobre Bitcoin através do Form$/, () => {
	pageObject.form('Últimas notícias sobre bitcoin')
});

When(/^submeter o form$/, () => {
	cy.get('form').submit()
    pageObject.BotaoCarregaMaisConteudo()
    
});

Then(/^deve obter o resultado maior que 10 por página$/, () => {
	expect(pageObject.contadorDeResultados()).to.above(10)
});
