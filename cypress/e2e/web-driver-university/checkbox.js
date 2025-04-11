describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
    });
    it("Check and validate checkbox", () => {
        cy.get('#checkboxes').find('input[type="checkbox"]').check(['option-1', 'option-2', 'option-4'])
        cy.get('#checkboxes').find('input[type="checkbox"]').uncheck(['option-3'])
    })
    it("Check and validate checkbox", () => {
        cy.get('#checkboxes').find('input[type="checkbox"]').eq(2).uncheck()
        .should('not.be.checked')
    })
})
