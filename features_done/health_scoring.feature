Feature: Health scoring

  Background: I have started the game
   Given that I have started the game by navigating to "http://localhost:3000"
 
  Scenario: Health increases when the player drinks espresso
    Given that I navigated to the position "inside the cafe"
    Then the value of my "Health" is 50
    And the value of my "Espressos" is 0
    When I click the "Buy an espresso" button
    Then the value of my "Health" should be 60
    And the value of my "Espressos" should be 1


  Scenario: Health decreases when the player waits
    Given that I navigated to the position "inside the cafe"
    And I know the current value of my "Health"
    When I click the "Wait" button
    Then the value of my "Health" should decrease
 

  Scenario: Game over when health reaches zero
    Given that my position is "outside the cafe"
    And the value of my "Health" is 50
    When I play until the game ends when "Health" reaches 0
    Then the game should end with the message "You health has deteriorated too much – you feel almost dead."
    And the value of my "Health" should be 0