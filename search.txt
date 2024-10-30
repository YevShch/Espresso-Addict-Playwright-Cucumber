Feature: Searching with Google
  As a Google search engine user
  I want to be able to find things

  Scenario: Searching for "cats"
    Given that I am at "https://www.google.com/"
    And I have approved of cookies
    When I search for "cats"
    Then I should get at least 1000 hits