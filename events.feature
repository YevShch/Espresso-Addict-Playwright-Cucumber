Feature: Events

  Scenario: Event occurs in a specific location
    Given I am at the location "<location>"
    And I see the initial picture of the location
    When I wait until the event "<event_message>" occurs
    Then the event "<event_message>" should be initialized
    And I should see the text includes the "<event_text>"
    And I should see the button "<button_text>"

    Examples:
      | location                     | event_message                   | event_text                                                                                                                                                                                                                                        | button_text          |
      | in the Cloud Forest Cafe     | The barista is in a dark corner | The barista is in a dark corner phoning a friend. You overhear parts of the conversion:    |                      |
      | A guitarist and sax player   | jam with us?                    | The guitarist shouts out to you: 'You look like a hip kid, why don't                       | Jam with the band    |
      | in a crowded bar             | a can of beer for free          | The bartender offers you a can of beer for free...                                         |                      |

  Scenario Outline: Event only occurs once during the game
    Given I am at the location "<location>"
    And I wait until the event "<event_message>" occurs
    And the event "<event_message>" should be initialized
    When I repeatedly choose "Wait" until the event "<event_message>" occurs or the game ends
    Then the event "<event_message>" should not occur again

    Examples:
      | location                     | event_message                   |
      | in the Cloud Forest Cafe     | The barista is in a dark corner |
      | A guitarist and sax player   | jam with us?                    |
      | in a crowded bar             | a can of beer for free          |

  Scenario Outline: Event does not occur in non-related locations
    Given I am at the location "<location>"
    When I repeatedly choose "Wait" until the event "<event_message>" occurs or the game ends
    Then I should not see the event message "<event_message>"

    Examples:
      | location                      | event_message                   |
      | outside the Cloud Forest Cafe | The barista is in a dark corner |
      | on an empty street            | The barista is in a dark corner |
      | in a crowded bar              | The barista is in a dark corner |
      | in the contry-side            | The barista is in a dark corner |
      | A guitarist and sax player    | The barista is in a dark corner |
      | in the Cloud Forest Cafe      | jam with us?                    |
      | outside the Cloud Forest Cafe | jam with us?                    |
      | on an empty street            | jam with us?                    |
      | in a crowded bar              | jam with us?                    |
      | in the contry-side            | jam with us?                    |
      | in the Cloud Forest Cafe      | a can of beer for free          |
      | outside the Cloud Forest Cafe | a can of beer for free          |
      | on an empty street            | a can of beer for free          |
      | in the contry-side            | a can of beer for free          |
      | A guitarist and sax player    | a can of beer for free          |
