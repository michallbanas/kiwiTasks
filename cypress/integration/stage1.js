/// <reference types="cypress" />

describe('Test should check if all the buttons, inputs and checkboxes are working in the search form on landing page', () => {

    before(() => {
        window.localStorage.setItem('dealsSubscriptionFormSeen', '1');
        window.localStorage.setItem('bookingcom_extension_default', 'false');
        cy.setCookie('__kwc_agreed', 'true');
        cy.visit('/');
    });

it('should check flight method options and select One-way', () => {
    cy.get('[data-test=SearchFormModesPicker-active-return]')
        .should('be.visible')
        .click()
    cy.get('[data-test=ModePopupOption-oneWay]')
        .should('be.visible')
        .contains('One-way')
        .click()
    cy.get('[data-test=ModePopupOption-oneWay]')
        .should('be.visible')
        .find('div')
        .contains('One-way')
      
    })

it('should check the cabin class picker and select Business', () => {
    cy.get('[data-test=CabinClassField-active-economy]')
        .should('be.visible')
        .click()
    
    cy.get('[data-test=CabinClassPicker-filter-business]')
        .should('be.visible')
        .click()

    cy.get('[data-test=CabinClassFooter-done]')
        .should('be.visible')
        .contains('Done')
        .click()

    cy.get('[data-test=CabinClassField-active-business]')
        .should('be.visible')
        .find('div')
        .contains('Business')

    })

it('should check each passenger and baggage field buttons and increase each value', () => {
        cy.get('[data-test=PassengersField]')
            .should('be.visible')
            .click()

        cy.get('[data-test=PassengersRow-adults], [data-test=PassengersRow-children], [data-test=PassengersRow-infants], [data-test=BagsPopup-cabin], [data-test=BagsPopup-checked]').as('filter')
        
        cy.get('@filter').each($el => {
            cy.wrap($el)
                .should('be.visible')
                .find('button')
                .last()
                .click()
        })

        cy.get('[data-test=PassengersFieldFooter-done]')
        .should('be.visible')
        .contains('Done')
        .click()

        cy.get('[data-test^=PassengersField-]')
            .should('be.visible')
            .contains('4')
    })

    it('should check location input and type "Vienna"', () => {
        cy.get('[data-test=PlacePickerInputPlace-close]')
            .click()
        cy.get('[data-test=PlacePickerInput-origin')
            .should('be.visible')
            .find('input')
            .type('Vienna')
        cy.get('[data-test=PlacePickerRow-wrapper]')
            .contains('Vienna')
            .should('be.visible')
            .as('place')
        cy.get('@place').click({force: true}) // I am aware that this is not a good solution. 

        cy.get('[data-test=PlacePickerInputPlace]')
            .should('be.visible')
            .contains('Vienna')
    })

    it('should check destination input and type "London"', () => {
        cy.get('[data-test=PlacePickerInput-destination]')
            .should('be.visible')
            .find('input')
            .type('London')
        cy.get('[data-test=PlacePickerRow-wrapper]')
            .should('be.visible')
            .and('contain', 'London')
            .contains('London')
            .as('destination')
        cy.get('@destination').click({force: true})
        cy.get('[data-test=PlacePickerInputPlace]')
            .should('be.visible')
            .contains('London')

    })

    it('should check date picker and select date', () => {
        cy.get('[data-test=SearchField-inputWrapper]')
            .should('be.visible')
            .find('input')
            .first()
            .click()

        cy.get('[data-test=CalendarDay-departureRange]')
            .contains('23')
            .click()

        cy.get('[data-test=SearchFormDoneButton]')
            .contains('Set dates')
            .click()

        cy.get('[data-test=SearchFieldDateInput')
            .invoke('val')
            .should('contain', '23')

    })

    it('should check if Search button is visible and contains "Search"', () => {
        cy.get('[data-test=LandingSearchButton]')
            .should('be.visible')
            .contains('Search')
    })     
})