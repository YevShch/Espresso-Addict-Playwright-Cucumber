Feature: Buying an espresso
  
  Scenario: Buying an espresso decreases Money and increases Health and Espressos
    Given I am at the location "in the Cloud Forest Cafe"
    And the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "bag" is "nothing cool"
    When I click the "Buy an espresso" button
    Then the value of my "Money" should be 5
    And the value of my "Health" should be 60
    And the value of my "Espressos" should be 1
    And the value of my "bag" should be "nothing cool"

  Scenario: Player cannot buy an espresso if they have no money
    Given I am at the location "in the Cloud Forest Cafe"
    When I bought 2 espressos
    And the value of my "Money" is 0
    And the value of my "Espressos" should be 2
    Then I should not see the "Buy an espresso" button
   
