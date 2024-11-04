Feature: Hipster Bag functionality

  Scenario: Hipster Bag updates and resets when a beer bonus is used
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "in a crowded bar"
    And the value of my "bag" is "nothing cool"
    When I wait until the event "a can of beer for free" occurs
    Then the value of my "bag" should be "a can of beer"
    When that I navigated to the position "inside the cafe"
    And I wait until the event "The barista is in a dark corner" occurs
    And I click the "Give beer to barista" button
    Then the value of my "bag" should be "nothing cool"
