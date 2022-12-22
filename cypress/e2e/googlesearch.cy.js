/// <reference types="cypress"/>

it('Google Search', () => {

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation step by step')
    cy.contains('Google Search').click()
    cy.contains('JMeter Beginner').click()
}) 