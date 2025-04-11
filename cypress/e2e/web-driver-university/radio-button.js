describe("Verify radio buttns via webdriveruni", () => {  
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    });
    it("Check a specific radio buttons", () => {
        cy.get('#radio-buttons').find('input[type="radio"]').check('orange')
    })
    it("Check and validate a specific radio buttons", () => {
        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked');
        cy.get('[value="cabbage"]').should('be.disabled');
        cy.get('[value="lettuce"]').check();
        cy.get('[value="lettuce"]').should('be.checked');
        cy.get('[value="pumpkin"]').should('not.be.checked');
    })
})
