/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUniversity', () => {
    it('Should be able to submit a successful submission via contact-us form', () => {
        //cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Doe')
        cy.get('[name="email"]').type('joe_doe@email.com')
        cy.get('textarea.feedback-input').type('how I learn cypress...')
        cy.get('[type="submit"]').click()
    });

    it('Should NOT be able to submit a successful submission via contact-us form as all fields are required', () => {
        //cypress code

    })
})