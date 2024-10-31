Feature: Events

  Background: I have started the game
    Given that I have started the game by navigating to "http://localhost:3000"
 
  Scenario: Event occurs in a specific location
    Given that I navigated to the position "<location>"
    And I see the initial picture of the location "<location>"
    When I wait until the event "<event_message>" occurs
    Then I should see the text "<event_text>"
    And I should see the button "<button_text>"

    Examples:
      | location                     | event_message                   | event_text                                                                              | button_text          |                                                                                                                                                          
      | inside the cafe              | The barista is in a dark corner | The barista is in a dark corner phoning a friend. You overhear parts of the conversion: |                      |
      | at the concert               | jam with us?                    | The guitarist shouts out to you: 'You look like a hip kid, why don't                    | Jam with the band    |
      | in a crowded bar             | a can of beer for free          | The bartender offers you a can of beer for free...                                      |                      |

  Scenario Outline: Event only occurs once during the game
    Given that I navigated to the position "<location>"
    And I wait until the event "<event_message>" occurs
    And I should see the text "<event_text>"
    When I repeatedly choose "Wait" until the event "<event_message>" occurs or "I died"
    Then the event "<event_message>" should not occur again

    Examples:
      | location                     | event_message                   |
      | inside the cafe              | The barista is in a dark corner |
      | at the concert               | jam with us?                    |
      | in a crowded bar             | a can of beer for free          |

  Scenario Outline: Event does not occur in non-related locations
    Given that I navigated to the position "<location>"
    When I repeatedly choose "Wait" until the event "<event_message>" occurs or "I died"
    Then I should not see the event message "<event_message>"

    Examples:
      | location                      | event_message                   |
      | outside the cafe              | The barista is in a dark corner |
      | on an empty street            | The barista is in a dark corner |
      | in a crowded bar              | The barista is in a dark corner |
      | in the country-side           | The barista is in a dark corner |
      | at the concert                | The barista is in a dark corner |
      | inside the cafe               | jam with us?                    |
      | outside the cafe              | jam with us?                    |
      | on an empty street            | jam with us?                    |
      | in a crowded bar              | jam with us?                    |
      | in the country-side           | jam with us?                    |
      | inside the cafe               | a can of beer for free          |
      | outside the cafe              | a can of beer for free          |
      | on an empty street            | a can of beer for free          |
      | in the country-side           | a can of beer for free          |
      | at the concert                | a can of beer for free          |
