Feature: "Jam with the band" button functionality

  Background: Waiting for the event "jam with the band"
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "at the concert"
    And I should not see the "Jam with the band" button
    When I wait until the event "jam with us?" occurs

  Scenario: "Jam with the band" button is visible after event "jam with the band" occurs
    Then I should see the button "Jam with the band"

  Scenario: "Jam with the band" button should disappear after being clicked
    When I click the "Jam with the band" button
    Then I should not see the "Jam with the band" button

  Scenario: Clicking "Jam with the band" increases Money by 5
    Given the value of my "Money" is 10
    When I click the "Jam with the band" button
    Then the value of my "Money" should be 15
