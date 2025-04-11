describe("Validate webdriveruni homepage links", () => {  
    it("Confirm links redirect to teh correct page", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})

        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        })
})
