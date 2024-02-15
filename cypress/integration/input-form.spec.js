describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    context('Basic Tests', () => {
        it('focuses input on load', () => {
            
            cy.focused()
                .should('have.class', 'new-todo');
        })
        it('accepts input', () => {
            const typedText = 'Buy Milk'
            cy.get('.new-todo')
                .type(typedText)
                .should('have.value', typedText)
        })
    })
    context('Form Submission', () => {
        beforeEach(() => {
            cy.server()
        })
        it('Adds New Todo Item when Submitted', () => {
            const todoText = 'Buy Eggs'
            const expectedLength = 1
            cy.route('POST', '/api/todos', {
                name: todoText,
                id: 1,
                isComplete: false,
            })
            cy.get('.new-todo')
                .type(todoText)
                .type('{enter}')
                .should('have.value', '')
            cy.get('.todo-list li')
                .should('have.length', expectedLength)
                .and('contain', todoText)
        })
        it('Error message displayed on failed submission', () => {
            const todoText = ''
            const expectedLength = 0
            cy.route({
                url: 'api/todos',
                method: 'POST',
                status: 500,
                response: {}
            })
            cy.get('.new-todo')
            .type('test{enter}')

            cy.get('.todo-list li')
            .should('not.exist')

            cy.get('.error')
            .should('be.visible')
        })
    })
})