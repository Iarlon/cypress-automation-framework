import { Given, When, Then, And , Before} from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
    cy.log("Executing before step");
    stub = cy.stub();
})

Given('I am on the login page', () => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html');
});

When('I enter username {word}', (username) => {
    cy.get('#text').type(username);
});

And('I enter password {word}', (password) => {
    cy.get('#password').type(password);
});

And('I click the login button', () => {
    cy.get('#login-button').click();
    cy.on('window:alert', (stub));
});

Then('I should be presented with the login confirmation message {word} {word}', (message, message2) => {
    const expectedMessage = message + " " + message2;
    cy.log(expectedMessage);
});