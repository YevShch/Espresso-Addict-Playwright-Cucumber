Feature: I lose the game by waiting
  As a user I want to check that I lose the game waiting repeatedly, regardless of the location I am at.

  Scenario Outline: You will lose the game by waiting enough times at the location "<location>"
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<location>"
    And that my position is "<location>"
    When I wait repeatedly until I die
    Then my position should be "I died"

    Examples:
      | location            |
      | outside the cafe    |
      | inside the cafe     |
      | on an empty street  |
      | in a crowded bar    |
      | in the country-side |
      | at the concert      |
