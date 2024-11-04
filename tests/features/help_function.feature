Feature: Help function

  Background: I have started the game
    Given that I have started the game by navigating to "http://localhost:3000"

  Scenario: Verify help button displays game information
    And that I navigated to the position "<location>"
    When I click the "Help" button
    Then I should see the text "You're a hipster. And you love iThings and your cool bag."
    And I should see the button "Continue"
    Examples:
      | location            |
      | outside the cafe    |
      | inside the cafe     |
      | on an empty street  |
      | in a crowded bar    |
      | in the country-side |
      | at the concert      |


  Scenario: Clicking Continue returns the player to their location
    And that I navigated to the position "<location>"
    When I click the "Help" button
    And I click the "Continue" button
    Then I should be back at the location "<location>"

    Examples:
      | location            |
      | outside the cafe    |
      | inside the cafe     |
      | on an empty street  |
      | in a crowded bar    |
      | in the country-side |
      | at the concert      |
