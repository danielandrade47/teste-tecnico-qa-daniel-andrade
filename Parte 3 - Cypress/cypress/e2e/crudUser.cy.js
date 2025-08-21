import registerPage from "../pages/registerPage";
import userManagementPage from "../pages/userManagementPage";

describe("CRUD Usuário - Automação Web", () => {
  const user = {
    firstName: "Teste",
    lastName: "Automacao",
    address: "Rua dos Testes, 123",
    email: "teste.automacao@example.com",
    phone: "11987654321",
    password: "Senha@123",
  };

  it("TC_CUD_001 - Cadastro de Usuário", () => {
    registerPage.visit();
    registerPage.fillForm(user);
    registerPage.submit();

    // Como o site não retorna mensagem de sucesso real, simulamos
    cy.url().should("include", "WebTable");
    userManagementPage.createUser(user);
  });

  it("TC_CUD_002 - Edição de Usuário (Simulado)", () => {
    userManagementPage.editUser(user.email, {
      lastName: "Automatizado",
      phone: "11999998888",
    });

    const updatedUser = userManagementPage.getUser(user.email);
    expect(updatedUser.lastName).to.eq("Automatizado");
    expect(updatedUser.phone).to.eq("11999998888");
  });

  it("TC_CUD_003 - Deleção de Usuário (Simulado)", () => {
    userManagementPage.deleteUser(user.email);
    const deletedUser = userManagementPage.getUser(user.email);
    expect(deletedUser).to.be.undefined;
  });
});
