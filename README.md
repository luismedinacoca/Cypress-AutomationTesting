Lecture 026 - Click Options
===========================
- cy.visit(URL)
- cy.get(LOCATORS)
- cy.get(LOCATOR).click()
  * sometimes some locators are not visible
  * for those locators NOT visible:
    + cy.get("locator").click({force:true})