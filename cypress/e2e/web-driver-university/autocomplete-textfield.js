describe("Verify autocomplete textfield via webdriveruni", () => {  
    it("Check and validate autocomplete textfield with a specific item list", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avocado'
            if(prod === productToSelect) {
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
        cy.get('#myInput').clear().type('G')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Grapes'
            if(prod === productToSelect) {
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    })
})
