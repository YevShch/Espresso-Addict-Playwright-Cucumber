Feature: Money scoring

  Scenario: Value of Money decreases when buying espresso
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Money" is 10
    When I click the "Buy an espresso" button
    Then the value of my "Money" should be 5


  Scenario: Value of Money increases when receiving a bonus "Jam with the band"
    Given I am at the location "A guitarist and sax player"
    And the value of my "Money" is 10
    When I wait until the event "jam with us?" occurs
    And I click the "Jam with the band" button
    Then the value of my "Money" should be 15


  Scenario: Value of Money do not changes when receiving a bonus "a can of beer"
    Given I am at the location "in a crowded bar"
    And the value of my "Money" is 10
    And the value of my "bag" is "nothing cool"
    When I wait until the event "a can of beer for free" occurs
    Then the value of my "bag" should be "a can of beer"
    And the value of my "Money" should be 10


