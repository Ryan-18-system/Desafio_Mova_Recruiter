
Feature: Feature name
  Como usuario, desejo acessar o DuckDuckGo
  com as últimas notícias sobre Bitcoin


  Scenario: Acessando pesquisa através do pressionar enter
    Given que o usuário queira acessar o DuckDuckGo
    And desejar realizar uma pesquisa sobre Bitcoin
    And informar a pesquisa
    When pressionar o enter
    And acessar a nova página
    And clicar no botão de carregar mais informações
    Then deve-se obter o resultado maior que 10 notícias
    


  Scenario: Acessando pesquisa através do ícone da Lupa
    Given que o usuário queira acessar o DuckDuckGo
    And  desejar realizar uma pesquisa sobre Bitcoin
    And  informar a pesquisa
    When clicar no ícone da lupa
    And Acessar nova Página
    Then  deve obter o resultado igual a 10 por página

  Scenario: Utilizando o Form do Cypress
    Given que o usuário queira acessar o DuckDuckGo
    And  desejar realizar uma pesquisa sobre Bitcoin através do Form
    When submeter o form
    Then  deve obter o resultado maior que 10 por página
