Feature: Help function

  Scenario: Verify help button displays game information
    Given I am at the location "<location>"
    When I click the "Help" button
    Then I should see a brief description of the game's purpose
    And I should see the button "Continue"
    Examples:
      | location                      |
      | outside the Cloud Forest Cafe |
      | in the Cloud Forest Cafe      |
      | on an empty street            |
      | in a crowded bar              |
      | in the contry-side            |
      | A guitarist and sax player    |


  Scenario: Clicking Continue returns the player to their location
    Given I am at the location "<location>"
    When I click the "Help" button
    And I click the "Continue" button
    Then I should be back at the location "<location>"

    Examples:
      | location                      |
      | outside the Cloud Forest Cafe |
      | in the Cloud Forest Cafe      |
      | on an empty street            |
      | in a crowded bar              |
      | in the contry-side           |
      | A guitarist and sax player  |
