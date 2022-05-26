/// <reference types = "cypress"/>

describe('Cypress Newsletter Subscription Test', function(){

    it('Go to Cypress Whats New Page', function(){
    cy.visit('https://www.cypress.io/whats-new')
    cy.scrollTo('bottom')
    })

    it.skip('Subscribe with valid email', function(){
        cy.get('#input-footer-email').type('asif@w3engineers.com')
        cy.get('.styled__Submit-sc-10l91w3-12').click()
    })

    it.skip('Subscribe with invalid email', function(){
        cy.get('#input-footer-email').type('asif@w3engineers/com')
        cy.get('.styled__Submit-sc-10l91w3-12').click()
    })

    it('Subscribe with invalid email', function(){
        cy.get('#input-footer-email').type('asif-w3engineers.com')
        cy.get('.styled__Submit-sc-10l91w3-12').click()
    })
})