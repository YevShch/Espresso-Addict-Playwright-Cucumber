Feature: Location Transitions

  Scenario Outline: Navigating between locations
    Given I am at the location "<current_location>"
    And I see the initial picture of the location
    When I click the "<action>" button
    Then I should be taken to the location "<expected_location>"
    And I should see the picture change
    And I should see the following action buttons: "<available_actions>"

    Examples:
      | current_location                      | action                   | expected_location                     | available_actions                                              |
      | outside the Cloud Forest Cafe         | Enter the cafe           | in the Cloud Forest Cafe              | Exit the cafe, Wait, Help                                      |
      | outside the Cloud Forest Cafe         | Go north                 | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | outside the Cloud Forest Cafe         | Go south                 | in the contry-side                    | Wait, Go west, Go north, Help                                  |
      | in the Cloud Forest Cafe              | Exit the cafe            | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go south                 | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | on an empty street                    | Go east                  | in a crowded bar                      | Wait, Go west, Help                                            |
      | in a crowded bar                      | Go west                  | on an empty street                    | Wait, Go south, Go east, Help                                  |
      | in the contry-side                    | Go west                  | A guitarist and sax player            | Wait, Go east, Help                                            |
      | in the contry-side                    | Go north                 | outside the Cloud Forest Cafe         | Enter the cafe, Wait, Go north, Go south, Help                 |
      | A guitarist and sax player            | Go east                  | in the contry-side                    | Wait, Go west, Go north, Help                                  |
