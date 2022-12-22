import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/') 
})

describe('All Login Tests', () => {

    it('Login with valid credentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin() 
        cy.get('.oxd-userdropdown-tab').click()
    }) 
    
    it('Login with invalid password', () => {
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin1234')
        loginPage.clickLogin() 
        cy.get('.oxd-userdropdown-tab').click()
    
    }) 

})

it('Login with invalid username', () => {
    
    loginPage.enterUsername('Admin2')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin() 
    cy.get('.oxd-userdropdown-tab').click()

}) 

