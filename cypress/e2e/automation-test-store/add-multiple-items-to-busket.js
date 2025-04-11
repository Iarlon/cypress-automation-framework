import HomePage from "../../support/pageObject/automation-test-store/Homepage.js";
import Add_items from "../../support/pageObject/automation-test-store/Add_items_hairCare.js";

describe("Add multiples items to busket", () => {
    const homePage = new HomePage();
    const add_items = new Add_items();

    before(function () {
        cy.fixture('products').as('product')
    });
    beforeEach(() => {
        homePage.visitHomepage();
        homePage.clickOn_HairCare_Button();

    });
    it("Add specific items to busket",{
        retries: {
            runMode: 2,
            openMode: 2
        }
    }, () => {
        cy.get('@product').then((product) => {

            product.productName.forEach(element => {
                add_items.Add_hairCare_items_to_basket(element);
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();

    })
    
})