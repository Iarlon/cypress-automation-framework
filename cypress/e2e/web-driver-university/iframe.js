describe("Handling IFrame and modals", () => {  
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should('contain', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        cy.get('@modal').contains('Close').click()
    })
})
