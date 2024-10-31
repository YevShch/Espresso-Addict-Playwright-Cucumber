Feature: Location Transitions

  Scenario Outline: Navigating between locations
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "<current_location>"
    And I see the initial picture of the location "<current_location>"
    When I click the "<action>" button
    Then that my position is "<expected_location>"
    And I see the initial picture of the location "<expected_location>"
    And I should see the following action buttons: "<available_actions>"

    Examples:
      | current_location                      | action                   | expected_location                     | available_actions                                              |
      | outside the cafe                      | Enter the cafe           | inside the cafe                       | Exit the cafe, Buy an espresso, Wait, Help                     |
      | outside the cafe                      | Go north                 | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | outside the cafe                      | Go south                 | in the country-side                   | Wait, Go west, Go north, Help                                  |
      | inside the cafe                       | Exit the cafe            | outside the cafe                      | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go south                 | outside the cafe                      | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go east                  | in a crowded bar                      | Wait, Go west, Help                                            |
      | in a crowded bar                      | Go west                  | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | in the country-side                   | Go west                  | at the concert                        | Wait, Go east, Help                                            |
      | in the country-side                   | Go north                 | outside the cafe                      | Enter the cafe, Wait, Go north, Go south, Help                 |
      | at the concert                        | Go east                  | in the country-side                   | Wait, Go west, Go north, Help                                  |
