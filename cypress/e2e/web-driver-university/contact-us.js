import Homepage from "../../support/pageObject/webdrive-uni/Homepage.js";
import Contact_Us from "../../support/pageObject/webdrive-uni/Contact_Us.js";

describe("Test contact us form via webdriverUni", () => {

    const homepage = new Homepage();
    const contact_us = new Contact_Us();


    beforeEach(function () {
        homepage.visitHomepage();
        homepage.clickOn_ContactUs_Button();
    });

    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    it("Should be able to submit a successful submission via contact us form", () => {

        contact_us.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "i just loved the website", 'h1', 'Thank You for your Message!')

    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

        const contact_us = new Contact_Us();
        contact_us.contactForm_Submission(data.first_name, data.last_name, " ", " ", 'body', 'Error: Invalid email address')

    })
})
