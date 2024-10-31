Feature: Full screen option

  Scenario Outline: Verify full screen option toggles correctly
    Given I am at the location "<location>"
    When I click the "Full screen" option
    Then the game should switch to full screen mode
    When I press the "ESC" key on my computer
    Then the game should exit full screen mode

    Examples:
      | location                      |
      | outside the Cloud Forest Cafe |
      | in the Cloud Forest Cafe      |
      | on an empty street            |
      | in a crowded bar              |
      | in the contry-side            |
      | A guitarist and sax player    |

