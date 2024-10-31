Feature: Healt scoring 

  Scenario Outline: Health decreases based on location when the player waits
    Given I am at the location "<location>"
    And the value of "Health" is "<initial_health>"
    When I choose to click "Wait" "<click_count>" times
    Then the value of "Health" should be "<expected_health>"


    Examples:
      | location                      | initial_health | click_count | expected_health |
      | outside the Cloud Forest Cafe | 50             | 1           | 45 or 40        |
      | in the Cloud Forest Cafe      | 50             | 2           | 47              |
      | on an empty street            | 50             | 2           | 45              |
      | in a crowded bar              | 50             | 2           | 47              |
      | in the contry-side            | 50             | 2           | 45              |
      | A guitarist and sax player    | 50             | 1           | 45 or 40        |

