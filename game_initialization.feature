Feature: Game initialization
 
Background: start the game
    Given that I have started the game by navigating to "http://localhost:3000"
    And I should be at the location "outside the Cloud Forest Cafe"

  Scenario: Verify initial scoreboard values
    Then the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "bag" is "nothing cool"

  Scenario: Verify starting location
    Then I should see the text "You are standing outside the Cloud Forest Cafe. The sun is shining."

  Scenario: Verify available actions in the starting location
    Then I should see the following action buttons:
      | Enter the cafe |
      | Go north       |
      | Go south       |
      | Wait           |
      | Help           |
