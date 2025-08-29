describe('Login invalido', () => {
  it('Não deve realizar Login, esperado retorno 400', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false,
      body: {
        email: '',
        password: ''
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })
})

describe('Login valido', () => {
  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

//deve alterar o email a cada vez que rodar o teste
describe('Serverest API - Usuários', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'jonathan',
        email: 'fulano3@qa.com',
        password: 'teste',
        administrador: 'false'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
    })
  })
})

