/// <reference types = "cypress"/>

describe('Multapplied', function(){

    it('Multapplied Login', function(){
    cy.visit('https://multapplied-staging.w3engineers.com/')
    cy.get('#email').type('rakib@w3engineers.com')
    cy.get('#password').type('11v&EhWkF&')
    cy.get('.el-button > span').click()
    cy.wait(6000)
    

    })

    it('Switch to Darkmode', function(){
        cy.get('.clear-btn > .icon-font-5').click()
        cy.wait(2000)
    })

    it.skip('Go to Bonds', function(){
        cy.get('.myBtn > :nth-child(3) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
    })

    it.skip('Go to Spaces', function(){
        cy.get('.myBtn > :nth-child(4) > :nth-child(1) > a > .el-menu-item > .el-tooltip > .menu-text').click()
    })

    it.skip('Go to Policies', function(){
        cy.get(':nth-child(5) > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow').click()
    })

    it('Logout', function(){
        cy.get('.avatar-wrapper > .svg-icon').click()
        cy.xpath('//*[@id="dropdown-menu"]/li[2]/a').click()
        
    })
})