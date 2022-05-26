/// <reference types = "cypress"/>

describe('Cypress Feature Page Test', function(){

    it('Go to Cypress Features Page', function(){
    cy.visit('https://www.cypress.io/features/')

    cy.get('.TestRunnerGui-sc-1bdra1y-2').scrollIntoView().should('be.visible')
    cy.wait(2000)

    cy.get('.FeaturesList-sc-6bwsh3-0 > .container').scrollIntoView().should('be.visible')
    cy.wait(2000)

    cy.get('.styled__Wrapper-sc-5ujzgx-0 > .container').scrollIntoView().should('be.visible')
    cy.wait(2000)
    
    cy.get(':nth-child(5) > .container').scrollIntoView().should('be.visible')
    cy.wait(2000)
    
    cy.get('main > :nth-child(6)').scrollIntoView().should('be.visible')
    cy.wait(2000)

    cy.get('main > :nth-child(7)').scrollIntoView().should('be.visible')
    cy.wait(2000)

    cy.get('.FollowUpBanner-sc-1lstvki-0').scrollIntoView().should('be.visible')
    cy.wait(2000)

    cy.get('.Footer-sc-1b1goem-0').scrollIntoView().should('be.visible')
    cy.wait(2000)


})
})