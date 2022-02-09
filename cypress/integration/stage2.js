/// <reference types="cypress" />

describe('Basic test of filter funcionality', () => {

    beforeEach(() => {
        window.localStorage.setItem('dealsSubscriptionFormSeen', '1');
        window.localStorage.setItem('bookingcom_extension_default', 'false');
        cy.setCookie('__kwc_agreed', 'true');
        cy.visit('/cheap-flights/london-united-kingdom/istanbul-turkey/');
    });

it('should select “Cheapest one way trip" and check that all filters were applied correctly”', () => {
    cy.get('tr > th')
        .find('a')
        .contains('Cheapest one-way trip')
        .click()

    cy.get('[data-test=SearchFormModesPicker-active-oneWay]')
        .find('button')
        .contains('One-way')

    cy.get('[data-test=ActiveSorter-price]')
        .should('be.visible')
        .find('div')
        .contains('Cheapest') 
    })
})