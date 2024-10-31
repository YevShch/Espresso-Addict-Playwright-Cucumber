Feature: Buying an espresso

Background: I am at the cafe  
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "inside the cafe"
    And the value of my "Health" is 50
    And the value of my "Money" is 10
    And the value of my "Espressos" is 0
    And the value of my "Bag" is "nothing cool"


  Scenario: Buying an espresso decreases Money and increases Health and Espressos
    When I click the "Buy an espresso" button
    Then the value of my "Money" should be 5
    And the value of my "Health" should be 60
    And the value of my "Espressos" should be 1
    And the value of my "Bag" should be "nothing cool"

  Scenario: Player cannot buy an espresso if they have no money
    When I bought 2 espressos
    And the value of my "Money" is 0
    And the value of my "Espressos" should be 2
    Then I should not see the "Buy an espresso" button
   
