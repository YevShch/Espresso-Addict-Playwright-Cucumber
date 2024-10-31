Feature: Win the game

Scenario: Player wins the game when espressos reaches 5
  Given that I have started the game by navigating to "http://localhost:3000"
  And that I navigated to the position "inside the cafe"
  And I bought 2 espressos
  When that I navigated to the position "in a crowded bar"
  And I wait until the event "a can of beer for free" occurs
  And that I navigated to the position "inside the cafe"
  And I wait until the event "The barista is in a dark corner" occurs
  And I click the "Give beer to barista" button
  And that I navigated to the position "at the concert"
  And I wait until the event "jam with us?" occurs
  And I click the "Jam with the band" button
  And that I navigated to the position "inside the cafe"
  And I bought 1 espressos
  Then the value of my "Espressos" should be 5
  And my position should be "I won"
  And I should see the text "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"
