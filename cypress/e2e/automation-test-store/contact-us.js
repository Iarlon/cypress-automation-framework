describe("Test contact us form via automation test store", () => {  
    beforeEach(() => {
        cy.viewport(550, 750)
        cy.visit("https://www.automationteststore.com");
        cy.get("a[href$='contact']").click()
    });
    before(function(){
        cy.fixture('userDetails').as('user')
    });
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        });
        
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type("i just loved the website");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        })
})
