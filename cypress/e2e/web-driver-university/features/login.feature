Feature: Login Functionality

    As a user, I want to be able to log in to the application so that I can access my account.

    # Scenario: Successful Login
    #     Given I am on the login page
    #     When I enter username webdriver
    #     And I enter password webdriver123
    #     And I click the login button
    #     Then I should be presented with the login confirmation message validation succeeded

    # Scenario: Unsuccessful Login
    #     Given I am on the login page
    #     When I enter username invalidUser
    #     And I enter password invalidPass
    #     And I click the login button
    #     Then I should be presented with the login confirmation message validation failed

    Scenario Outline: Test Login via WebdriverUniversity Login Portal
        Given I am on the login page
        When I enter username <username>
        And I enter password <password>
        And I click the login button
        Then I should be presented with the login confirmation message <message>

        Examples:
            | username         | password         | message                       |
            | webdriver        | webdriver123     | validation succeeded          |
            | invalidUser      | invalidPass      | validation failed             |
            | emptyUser        | emptyPass        | validation failed             |
            | specialCharUser  | specialCharPass  | validation succeeded          |