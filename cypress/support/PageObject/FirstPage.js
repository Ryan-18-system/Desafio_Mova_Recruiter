class FirstPage{
    constructor(){
        this.text = ''
    }
    acessarPagina(){
        cy.visit('/')
    }
    acessarInput(){

       return cy.get('input[id="search_form_input_homepage"]')

        
    }
    conteudoInput(texto){
      this.text = texto;
      cy.get('#search_form_homepage')
      .type(texto)
      
    }
    enterConteudo(){
       return this.acessarInput().type(`${''}{enter}`)
    
    }
    clickLupa(){
        this.acessarInput().clear().type(`${this.text}`)
        cy.get('input[type="submit"]').click()
        
    }
    contadorDeResultados(){
        const result = 'article'
        let count = Cypress.$(result).length
        return count
    }

    BotaoCarregaMaisConteudo(){
        cy.get('a.result--more__btn').click()
    }

}
export default FirstPage