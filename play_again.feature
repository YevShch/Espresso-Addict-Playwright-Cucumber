Feature: "Play again" button functionality

  Scenario: Verify "Play again" button functionality after health reaches 0
    Given that I have started the game by navigating to "http://localhost:3000"
    And I play until the game ends when "Health" reaches 0
    And I should see the button "Play again"
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "bag" should be "nothing cool"


  Scenario: Verify "Play again" button functionality after espressos reach 5
    Given that I have started the game by navigating to "http://localhost:3000"
    And I play until the game ends when espressos reach 5
    And I should see the button "Play again"
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "bag" should be "nothing cool"
