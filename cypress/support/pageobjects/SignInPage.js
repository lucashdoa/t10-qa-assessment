import {SIGNIN} from '../locators'

class SignInPage{
    visit(){
        cy.visit('/')
    }

    typeEmail(email){
        cy.get(SIGNIN.EMAIL_INPUT)
            .type(email)
    }

    typePassword(password){
        cy.get(SIGNIN.PASSWORD_INPUT)
            .type(password)
    }

    clearEmail(){
        cy.get(SIGNIN.EMAIL_INPUT)
            .clear()
    }

    clearPassword(){
        cy.get(SIGNIN.PASSWORD_INPUT)
            .clear()
    }

    getEmailValidationMessage(){
        return cy.get(SIGNIN.EMAIL_VALIDATION)
    }

    getPasswordValidationMessage(){
        return cy.get(SIGNIN.PASSWORD_VALIDATION)
    }
}
 
export default SignInPage