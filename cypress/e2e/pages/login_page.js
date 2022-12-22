export class LoginPage{

    user_name = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    user_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.user_name).type(username)
    }
    enterPassword(password){
        cy.get(this.user_password).type(password)
    }
    clickLogin(){
        cy.get(this.login_button).click()
    }
}