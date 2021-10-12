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

  Scenario: Kidcents is Removed on FSA/HSA Payments Methods
    Given I am a guest user
    And I have an FSA/HSA product in my cart
    And I have Kidcents applied
    When I am at checkout
    And I populated my shipping information
    And I proceed to the payment step
    And I select an FSA/HSA new card
    Then Kidcents is removed
