Feature: End of the Game

  Background: start the game
    Given that I have started the game by navigating to "http://localhost:3000" 
    
  Scenario: Player loses the game when health reaches 0
    Given I play until the game ends when "Health" reaches 0
    When the value of my "Health" is 0
    Then the game should end with the message "You health has deteriorated too much – you feel almost dead."
    And I should see the button "Play again"


  Scenario: Player wins the game when espressos reach 5
    # I play until the game ends when espressos reach 5
    When I click the "Go north" button
    And I click the "Go east" button
    And I wait until the event "a can of beer for free" occurs
    And I click the "Go west" button
    And I click the "Go south" button
    And I click the "Go south" button
    And I click the "Go west" button
    And I wait until the event "jam with us?" occurs
    And I click the "Jam with the band" button
    And I click the "Go east" button
    And I click the "Go north" button
    And I click the "Enter the cafe" button
    And I wait until the event "The barista is in a dark corner" occurs
    And I click the "Give beer to barista" button
    And I bought 3 espressos
    Then the value of my "Espressos" should be 5
    And the game should end with the message "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
    And I should see the button "Play again"
