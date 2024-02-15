describe('List item', () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })
    it('properly displays completed items', () => {
        const expectedLength = 1
        const expectedItemText = 'Eggs'
        cy.get('.todo-list li')
        .filter('.completed')
        .should('have.length', expectedLength)
        .and('contain', expectedItemText)
        .find('.toggle')
        .should('be.checked')
    })
    it('Shows remaining todos in footer are correct', ()=>{
        const expectedCompleteTodos = 3
        cy.get('.todo-count')
            .should('contain', expectedCompleteTodos)
    })
    it.only('Removes a todo', ()=>{
        const expectedLengthAfterRemoved = 3
        cy.route({
            url: '/api/todos/1',
            method: 'DELETE',
            status: 200,
            response: {}
        })
        cy.get('.todo-list li')
            .as('list')

        cy.get('@list')
            .first()
            .find('.destroy')
            .invoke('show')
            .click()

        cy.get('@list')
            .should('have.length', expectedLengthAfterRemoved)
            .and('not.contain', 'Milk')
    })
})