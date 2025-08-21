Este projeto contém os testes automatizados da Parte 2 – Automação WEB do desafio técnico, utilizando Cypress.
O objetivo é validar operações básicas de Cadastro, Edição e Deleção de usuário em um formulário web.

Estrutura do projeto:

   cypress/
   ├── e2e/
   │   └── crudUser.cy.js          # Arquivo de testes principais
   ├── pages/
   │   ├── registerPage.js         # Page Object da tela de registro
   │   └── userManagementPage.js   # Page Object simulado para edição/remoção
   └── support/
       └── e2e.js                  # Configurações globais e handlers

   cypress.config.js               # Configurações do Cypress
   package.json                    # Dependências do projeto

Pré-requisitos:
 - Node.js LTS instalado (>= 18.x);
 - NPM (instalado junto com o Node.js);
 - Cypress (instalado via npm install).

Instruções para instalação:
1. Clone ou copie o projeto;
2. Na pasta do projeto, execute o comando: 'npm install'

Instruções para execução dos testes:
1. Abrir a interface do Cypress com o comando 'npx cypress open'
2. Selecione a suite 'crudUser.cy.js'

Casos de Teste Implementados
1. TC_CUD_001 – Cadastro de Usuário
  Preenche o formulário de registro (Register.html).
  Valida preenchimento de campos obrigatórios e envio do cadastro.

2. TC_CUD_002 – Edição de Usuário (Simulado)
  Atualiza dados em memória (sem backend real).

3. TC_CUD_003 – Deleção de Usuário (Simulado)
  Remove o usuário criado da lista simulada.

Observações importantes:
Durante os testes executados localmente, o cenário TC_CUD_001 não pôde ser executado até o final, pois durante a execução do cypress, a visualização da página de testes sempre abre de forma quebra, impedindo o cypress de localizar o elemento da seleção de idioma.
Essa situação ocorreu em todos os navegadores que utilizei para os testes: Chrome, Edge e Electron.
Evidência de Testes em anexo: Erro TC_CUD_001.png