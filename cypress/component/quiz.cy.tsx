import React from "react";
import Quiz from '../../client/src/components/Quiz'

describe ('Quiz', ()=>{
    beforeEach(()=>{
        cy.intercept({
            method:'GET',
            url:'/api/questions/random'
        }, 
    {
        fixture:'questions.json',
        statusCode: 200
    }
    ).as('getRandomQuestion')

    })
it('start quiz and show questions',()=>{
    cy.mount(<Quiz/>)
    cy.get('button').contains('Start Quiz').click()
    cy.get('.card').should('be.visible')
    cy.get('h2').should('not.be.empty')
})
it('Should answer questions and finish quiz', ()=>{
    cy.mount(<Quiz/>)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('1').click()
    cy.get('.alert/success').should('be.visible').and('contain','Your Score')
})
it('Should restart quiz',()=>{
    cy.mount(<Quiz/>)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('Take New Quiz').click()
    cy.get('.card').should('be.visible')
    cy.get('h2').should('not.be.empty')
})
})