Feature: "Give beer to barista" button functionality

  Scenario: "Give beer to barista" button hidden if I have no beer
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "bag" is "nothing cool"
    Then I should not see the "Give beer to barista" button

  Scenario: "Give beer to barista" button hidden without beer, even when barista event happens
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "bag" is "nothing cool"
    When I wait until the event "The barista is in a dark corner" occurs
    Then I should not see the "Give beer to barista" button


  Scenario: "Give beer to barista" button is not visible until the event with the barista occurs
    Given I am at the location "in a crowded bar"
    And I wait until the event "a can of beer for free" occurs
    And the value of my "bag" should be "a can of beer"
    When I came to the cafe
    Then I should not see the "Give beer to barista" button

  Scenario:"Give beer to barista" button is visible when player has a beer and the event with the barista has occurred.
    Given I am at the location "in a crowded bar"
    And I wait until the event "a can of beer for free" occurs
    And the value of my "bag" should be "a can of beer"
    When I came to the cafe
    And I wait until the event "The barista is in a dark corner" occurs
    Then I should see the button "Give beer to barista"

  Scenario: When I give beer to the barista, scores should update correctly
    Given I am at the location "in a crowded bar"
    And I wait until the event "a can of beer for free" occurs
    And the value of my "bag" should be "a can of beer"
    When I came to the cafe
    And I wait until the event "The barista is in a dark corner" occurs
    And I know the current value of my "Health"
    And I know the current value of my "Money"
    And I know the current value of my "Espressos"
    And the value of my "bag" is "a can of beer"
    When I click the "Give beer to barista" button
    Then the value of my "Health" should increase by 20
    And the value of my "Money" should remain the same 
    And the value of my "Espressos" should increase by 2
    And the value of my "bag" should be "nothing cool"

  Scenario: "Give beer to barista" button should disappear after being clicked
    Given I am at the location "in a crowded bar"
    And I wait until the event "a can of beer for free" occurs
    And the value of my "bag" should be "a can of beer"
    When I came to the cafe
    And I wait until the event "The barista is in a dark corner" occurs
    And I should see the button "Give beer to barista"
    And I click the "Give beer to barista" button
    Then I should not see the "Give beer to barista" button


