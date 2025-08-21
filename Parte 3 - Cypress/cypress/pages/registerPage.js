class RegisterPage {
  elements = {
    firstName: () => cy.get("input[placeholder='First Name']"),
    lastName: () => cy.get("input[placeholder='Last Name']"),
    address: () => cy.get("textarea[ng-model='Adress']"),
    email: () => cy.get("input[type='email']"),
    phone: () => cy.get("input[type='tel']"),
    genderMale: () => cy.get("input[value='Male']"),
    hobbies: () => cy.get("input[type='checkbox']"),
    languages: () => cy.get("#msdd"),
    skills: () => cy.get("#Skills"),
    country: () => cy.get("#countries"),
    year: () => cy.get("#yearbox"),
    month: () => cy.get("select[placeholder='Month']"),
    day: () => cy.get("#daybox"),
    password: () => cy.get("#firstpassword"),
    confirmPassword: () => cy.get("#secondpassword"),
    submitBtn: () => cy.get("#submitbtn"),
  };

  visit() {
    cy.visit("/Register.html");
    cy.wait(3000);
  }

  fillForm(user) {
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.address().type(user.address);
    this.elements.email().type(user.email);
    this.elements.phone().type(user.phone);
    this.elements.genderMale().check();
    this.elements.hobbies().first().check(); // Cricket
    this.elements.hobbies().eq(2).check();   // Movies
    this.elements.languages().click();
    cy.contains(".ui-corner-all", "English").click();
    //cy.get("#msdd ul li a").contains("English").click();
    cy.get("body").click(); // fecha dropdown
    this.elements.skills().select("Analytics");
    this.elements.country().select("Brazil");
    this.elements.year().select("1990");
    this.elements.month().select("January");
    this.elements.day().select("15");
    this.elements.password().type(user.password);
    this.elements.confirmPassword().type(user.password);
  }

  submit() {
    this.elements.submitBtn().click();
  }
}

module.exports = new RegisterPage();
