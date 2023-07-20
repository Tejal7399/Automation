Feature: create Encounter Type

    Scenario: Users should not be able to create/sync clinical chart of new Advanced Encounter Type with new "General Deatails" from without required parameters.
        Given I navigate to Hospice Portal using valid Username and password and I verified PageTitle
        Then I create new Advanced Encouter type without required details using Agency tab
        # Then I Search patient and create chart
        # Then I Fill the required parameters & save Encounter type
        

