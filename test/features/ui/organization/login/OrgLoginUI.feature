Feature: Login Functionality

  @ui
  Scenario: Successful Login
    Given I open the login page
    When I enter username "sapphirespadmqa12@gmail.com"
    And I enter password "SapphireSuperAdminQA34"
    When I click the login button
    Then I should see the dashboard