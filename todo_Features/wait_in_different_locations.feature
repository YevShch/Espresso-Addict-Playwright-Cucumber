Feature: Healt scoring 

  Scenario Outline: Health decreases based on location when the player waits
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<location>"
    And the value of "Health" is "<initial_health>"
    When I choose to click "Wait" "<click_count>" times
    Then the value of "Health" should be "<expected_health>"


    Examples:
      | location                      | initial_health | click_count | expected_health |
      | outside the cafe              | 50             | 1           | 45 or 40        |
      | inside the cafe               | 50             | 2           | 47              |
      | on an empty street            | 50             | 2           | 45              |
      | in a crowded bar              | 50             | 2           | 47              |
      | in the country-side           | 50             | 2           | 45              |
      |at the concert                 | 50             | 1           | 45 or 40        |

