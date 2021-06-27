Lecture 029 - Challenge Solution
================================
1. cypress/integration/webdriver/contact-us.js
2. Feature: "contact-us"
- cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
- complete contact us form:
  * enter a name in name text field: cy.get(''[name="first_name"]).type('Joe')
  * enter a last name in last name text field.
  * enter an email in email text field.
  * enter a comment inside comment text area.
- submit the contact us form:
  * cy.get('[type="submit"]').click()
