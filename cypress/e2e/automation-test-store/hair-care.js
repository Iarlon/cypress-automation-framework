describe("Verifying iteration with 'each' ", () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
        
    });
    it("Navigating to hair care page", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("index -  "+ index + ": "+ $el.text());
        });
    })
    it("Will add specific item to basket", () => {

        cy.selectProduct('Curls to straight');
        cy.selectProduct('Seaweed Conditioner');
    })

    it("Will add specific item to basket", () => {

        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })

})