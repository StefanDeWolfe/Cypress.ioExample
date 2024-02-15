describe('App initialization', () => {
    context('GET testing', () => {
        const expectedLength = 4
        it('Loads todos on page load', () =>{
            cy.seedAndVisit()

            cy.get('.todo-list li')
            .should('have.length', expectedLength)
        })
        it('Displays an error on failure of GET to load todos', () => {
            cy.server()
            cy.route({
                url: 'api/todos',
                method: 'GET',
                status: 500,
                response: {}
            })
            cy.visit('/')

            cy.get('.todo-list li')
            .should('not.exist')

            cy.get('#errorLoad')
            .should('be.visible')
        })
    })
    
})