Feature: "Play again" button functionality

  Scenario: Verify "Play again" button functionality after player loses a game
    Given that I have started the game by navigating to "http://localhost:3000"
    When I wait repeatedly until I die
    And my position should be "I died"
    And I should see the button "Play again"
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "bag" should be "nothing cool"


  Scenario: Verify "Play again" button functionality after player wins a game
    Given that I have started the game by navigating to "http://localhost:3000"
    Given that I navigated to the position "in a crowded bar"
    And I wait until the event "a can of beer for free" occurs
    And that I navigated to the position "at the concert"
    And I wait until the event "jam with us?" occurs
    And I click the "Jam with the band" button
    And that I navigated to the position "inside the cafe"
    And I bought 3 espressos
    And I wait until the event "The barista is in a dark corner" occurs
    And I click the "Give beer to barista" button
    And my position should be "I won"
    And I should see the button "Play again"
    When I click the "Play again" button
    Then I should be taken back to the start of the game
    And the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And the value of my "bag" should be "nothing cool"
