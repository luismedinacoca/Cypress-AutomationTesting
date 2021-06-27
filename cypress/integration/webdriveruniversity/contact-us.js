/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUniversity', () => {
    it('Should be able to submit a successful submission via contact-us form', () => {
        //cypress code
        cy.visit('https://webdriveruniversity.com/')
        //even locator's #id, this is NOT visible so cypress has an option to force this invisible to be visible
        cy.get('#contact-us').click({
            force: true
        })
    });

    it('Should NOT be able to submit a successful submission via contact-us form as all fields are required', () => {
        //cypress code

    })
})