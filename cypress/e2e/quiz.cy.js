describe ('Quiz', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('start the quiz',() =>{
        cy.get('button').contains('Start Quiz').click()
        cy.get('.card').should('be.visible')
        cy.get('h2').should('not.be.empty')
    })
    it('Should answer questions and finish quiz', ()=>{
        cy.get('button').contains('Start Quiz').click()
        for(let i=0; i<10; i++){
            cy.get('button').contains('1').click()

        }
        cy.get('.alert-success').should('be.visible').and('contain','Your score')
    })
    it('Should restart quiz',()=>{
    
        cy.get('button').contains('Start Quiz').click()
        for(let i=0; i<10; i++){
            cy.get('button').contains('1').click()

        }
        cy.get('button').contains('Take New Quiz').click()
        cy.get('.card').should('be.visible')
        cy.get('h2').should('not.be.empty')
    })
})