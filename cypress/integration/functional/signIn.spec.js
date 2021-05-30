/// <reference types="cypress"/>

import SignInPage from '../../support/pageobjects/SignInPage'

describe("Given Signin page is accessed", () => {
    const signinPage = new SignInPage()
    beforeEach(() => {
        signinPage.visit()
    })
    context("When an ivalid email address is typed", () => {
        it('CT-1: Should show the message "Insert a valid email address"',  () => {
            const expectedMessage = "Insert a valid email address."
            signinPage.typeEmail('mail.com')
            signinPage.getEmailValidationMessage()
                .should('have.text', expectedMessage)
        })
    })
    context("When email is typed and then cleared", () => {
        it('CT-2: Should show the message "Email must be provided"',  () => {
            const expectedMessage = "Email must be provided."
            signinPage.typeEmail('mail.com')
            signinPage.clearEmail()
            signinPage.getEmailValidationMessage()
                .should('have.text', expectedMessage)
        })
    })
    context("When an invalid password is typed", () => {
        it('CT-3: Should show the message "The password must have at leat 7 characters"',  () => {
            const expectedMessage = "The password must have at leat 7 characters."
            signinPage.typePassword('123')
            signinPage.getPasswordValidationMessage()
                .should('have.text', expectedMessage)
        })
    })
    context("When password is typed and then cleared", () => {
        it('CT-4: Should show the message "Password must be provided"',  () => {
            const expectedMessage = "Password must be provided."
            signinPage.typePassword('mail.com')
            signinPage.clearPassword()
            signinPage.getPasswordValidationMessage()
                .should('have.text', expectedMessage)
        })
    })
    context("When Login button is pressed but the credentials are invalid", () => {
        it('CT-5: Should show the message "Email or password are incorrect. Try again"',  () => {
            const expectedMessage = "Email or password are incorrect. Try again"
            signinPage.typeEmail('lucas@mail.com')
            signinPage.typePassword('1234567')
            signinPage.clickLoginButton()
            signinPage.getLoginValidationMessage()
                .should('have.text', 'Email or password are incorrect. Try again.')
        })
    })
})
