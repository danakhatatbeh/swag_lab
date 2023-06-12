
beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
  });
///<reference types = "Cypress"/>



describe("this is a test for login in standard user", ()=>{
    it("test the login when the user name and the password are correct", ()=>{
cy.visit("https://www.saucedemo.com/")
cy.get('[data-test="username"]').type("standard_user")
cy.get('[data-test="password"]').type("secret_sauce")
cy.get('[data-test="login-button"]').click()

    })
})