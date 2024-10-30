Feature: Hipster Bag functionality

  Scenario: Hipster Bag updates and resets when a beer bonus is used
    Given I am at the location "in a crowded bar"
    And the value of my "bag" is "nothing cool"
    When I wait until the event "a can of beer for free" occurs
    Then the value of my "bag" should be "a can of beer"
    When I moved to the location "in the Cloud Forest Cafe"
    When I wait until the event "The barista is in a dark corner" occurs
    And I click the "Give beer to barista" button
    Then the value of my "bag" should be "nothing cool"
