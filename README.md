Lecture 036 - Practical in Depth Look into Selectors  
====================================================
cypress/integration/webdriver/contact-us.js
Feature: "contact-us"
- in order to run just one scenario: 
  * it.only()
- create a new folder named automation-test-store
  * create a contact-us.js fodler inside it
- add the following code inside cypress/support/index.js
  Cypress.Server.defaults({
    whitelist: (xhr) => {
      return true;
    }
  })
  => issue:  xhr does not disappear
- create a test for automation test store