Feature: Win the game

Scenario: Player wins the game when espressos reaches 5
  Given that I have started the game by navigating to "http://localhost:3000"
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
