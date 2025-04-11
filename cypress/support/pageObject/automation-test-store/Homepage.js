class HomePage {
    visitHomepage() {
        cy.visit(Cypress.env("automationteststore_homepage"));
    }
    clickOn_HairCare_Button() {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    }

}
export default HomePage;