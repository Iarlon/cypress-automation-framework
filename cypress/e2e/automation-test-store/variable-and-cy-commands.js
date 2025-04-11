describe("Verifying variables, cypress commands and jQuery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com');

        cy.get('a[href*="product/category&path="]').contains('Makeup').click();
        cy.get('a[href*="product/category&path="]').contains('Skincare').click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*="product/category&path="]').contains('Makeup').click();
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    });
    it.only("Validate properties of the contact us page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

        })
    });
})