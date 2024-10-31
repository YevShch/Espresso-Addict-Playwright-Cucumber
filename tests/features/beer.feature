Feature: Beer

  Scenario:"Give beer to barista" button is visible when player has a beer and the event with the barista has occurred.
    Given that I have started the game by navigating to "http://localhost:3000"
    Given that I navigated to the position "in a crowded bar"
    When I wait until the event "a can of beer for free" occurs
    Then the value of my "bag" should be "a can of beer"
