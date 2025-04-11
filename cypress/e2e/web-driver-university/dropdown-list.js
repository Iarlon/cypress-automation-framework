describe("Verify dropdown list via webdriveruni", () => {  
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    });
    it("Check and validate a dropdown list", () => {

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('jquery').should('have.value', 'jquery')

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    })
})
