describe("Alias adn invoke", () => {
    it("Validating a specific hair care product", () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    })
    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com');

        cy.get('.thumbnail').as('thumbnailClass');
        cy.get('@thumbnailClass').should('have.length', 16)
    });
    it.only('calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com');

        // cy.get('@thumbnailClass').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        cy.get('.thumbnail').find('.priceold').invoke('text').as('saleOldItemPrice');

        var itemsTotal = 0

        cy.get('@saleItemPrice').then($linkText => {
            var itemsPrice = 0 
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemsPrice += Number(itemPrice[i]);
            }
            itemsTotal += itemsPrice;
            cy.log('Total price of on sale items: ' + itemsPrice);
        })

        cy.get('@itemPrice').then($linkText => {
            var itemsPrice = 0 
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemsPrice += Number(itemPrice[i]);
            }
            itemsTotal += itemsPrice;
            cy.log('Total price of normal items: ' + itemsPrice);
        })
        .then(()=> {
            cy.log('Total price of all products: ' + itemsTotal);
            expect(itemsTotal).to.equal(573.5);
        })
    });
})