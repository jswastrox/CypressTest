beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
});

describe('Login invalido', () => {
  it('Não deve realizar Login e deve verificacar a mensagem de erro', () => {

    cy.get('[data-testid="entrar"]').click()
    // Valida informações não preenchidas
    cy.get(':nth-child(3) > :nth-child(2)').contains('Email é obrigatório')
    cy.get(':nth-child(4) > :nth-child(2)').contains('Password é obrigatório')
  })
})

//deve alterar o email a cada vez que rodar o teste
describe('Cadastro de um Novo Usuário', () => {
  it('Deve cadastrar um novo usuário', () => {

    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Fulano')
    cy.get('[data-testid="email"]').type('fulano2@qa.com')
    cy.get('[data-testid="password"]').type('teste')
    cy.get('[data-testid="cadastrar"]').click()
    // Valida mensagem de sucesso
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  })
})

describe('Login valido', () => {
  it('Deve realizar login com sucesso', () => {

    cy.get('[data-testid="email"]').type('teste@teste.com')
    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
    // Valida login realizado com sucesso
    cy.get('[data-testid="home"]').contains('Home')
  })
})