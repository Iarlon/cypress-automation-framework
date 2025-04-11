describe("inspect an item", () => {
    it("Should be able to inspect an item", () => {
        cy.visit('https://automationteststore.com');
        cy.get("a[title*='Skinsheen']").first().click().then(function(itemHeaderText){
            console.log("Selected item: " + itemHeaderText.text());
        });
    });
    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
})