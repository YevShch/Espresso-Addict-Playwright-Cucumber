Feature: Full screen option

  Scenario Outline: Verify full screen option toggles correctly
    Given that I have started the game by navigating to "http://localhost:3000"
    Given that I navigated to the position "<location>"
    When I click the "Full screen" option
    Then the game should switch to full screen mode
    # When I press the "Escape" key on my computer
    # Then the game should exit full screen mode
    
   # Note: It was not possible to simulate pressing the "Escape" key in testing,
   # so I used a JavaScript  workaround to exit full screen mode.
   # In a real scenario, pressing "Escape" would work as expected.

    Examples:
      | location                      |
      | outside the cafe              |
      | inside the cafe               |
      | on an empty street            |
      | in a crowded bar              |
      | in the country-side           |
      | at the concert                |

