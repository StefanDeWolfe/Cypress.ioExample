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
    it('Removes a todo', ()=>{
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

    it.only('Marks an incomplete item as complete', ()=>{
        const expectedCompleteTodos = 2
        cy.fixture('todos')
        .then(todos => {
            const target = Cypress._.head(todos)
            cy.route(
                'PUT',
                `/api/todos/${target.id}`,
                Cypress._.merge(target, {isComplete: true})
            )
        })

        cy.get('.todo-list li')
            .first()
            .as('first-todo')

        cy.get('@first-todo')
            .find('.toggle')
            .click()
            .should('be.checked')

        cy.get('@first-todo')
            .should('have.class', 'completed')

            cy.get('.todo-count')
            .should('contain', expectedCompleteTodos)
    })
})