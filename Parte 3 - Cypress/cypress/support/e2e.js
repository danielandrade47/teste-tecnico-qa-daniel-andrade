// Arquivo de suporte do Cypress

// Ignorar erros de JS da aplicação durante os testes
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // impede que o erro quebre o teste
});