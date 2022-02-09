# BDD Scenarious

1:

Scenario: Basic adhoc search
GIVEN: Website is loaded
AND: The cookie value is set to true
WHEN: I type and select "Vienna" in "From" input field
THEN: I see "Vienna" is selected in "From" input field
WHEN: I type and select "London" in "To" input field
THEN: I see "London" is selected in "To" Input field
WHEN: I click on "Explore" button
THEN: Page with the result is loaded

2:

Scenario: Currency and language buttons are working
GIVEN: Website is loaded
AND: The cookie value is set to true
WHEN: I click on the currency button | data-test="RegionalSettingsButton"
THEN: The language and currency modal window will open
WHEN: I select currency option GBP | data-test="CurrencySelect"
THEN: I see currency changed from EUR - default value to GBP
WHEN: I select language option Slovenčina | data-test="LanguageSelect"
THEN: I see language changed from English to Slovenčina
WHEN: I click on save & continue button | data-test="SubmitRegionalSettingsButton"
THEN: The website language is changed
AND: The icon of language button in navigation is changed
AND: The currency is also changed

## 3: // cypress test => stage1.js

Scenario: All the buttons, inputs and checkboxes are visible and working in the search form landing page
GIVEN: Website is loaded
AND: The cookie value is set to true
WHEN: I click on the buton data-test="SearchFormModesPicker-active-return"
AND: I select one-way option
THEN: One-way option is selected
WHEN: I click on the button data-test="CabinClassField-active-economy"
AND: I select Business
AND: I click to done
THEN: Business option is selected
WHEN: I click on the button data-test="PassengersField"
AND: I increase Adults, children, infants, Cabin baggage, Checked baggage values
AND: I click to done
THEN: Adults, children, infants, Cabin baggage, Checked baggage values are selected
WHEN: I type and select "Vienna" in "From" input field | data-test="SearchField-input"
THEN: I see "Vienna" is selected in "From" input field
WHEN: I type and select "London" in "To" input field | data-test="SearchField-input"
THEN: I see "London" is selected in "To" Input field 
WHEN: I pick date in date picker data-test="DateValue"
AND: I click on set dates button
AND: I see the date selected
AND: The search button is active and visible data-test="LandingSearchButton"







