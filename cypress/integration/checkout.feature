Feature: Checkout
  Scenario: Guest Users
    Given I am a guest user
    And I have a product in my cart
    When I am at checkout
    And I populated my shipping information
    And I proceed to the payment step
    And I populate my card information
    And I continue to payment summary
    And I place my order
    Then I see the order success page
