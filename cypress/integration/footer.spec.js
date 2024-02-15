describe('Footer', () => {
    context('With a single todo', () => {
        const expectedFooterText = '1 todo left'
        it('displays a singular todo in count',() => {
            cy.seedAndVisit([{id:1,name:'Buy Milk',isComplete:false}])
            cy.get('.todo-count')
            .should('contain', expectedFooterText)
        })
    })
    
    context('With multiple todos', () => {
        beforeEach(()=>{
            cy.seedAndVisit()
        })
        it('displays plural todos in count',() => {
            const expectedFooterText = '3 todos left'
            cy.get('.todo-count')
            .should('contain', expectedFooterText)
        })

        it('handles filter links',() => {
            const filters = [
                {link: 'Active', expectedLength: 3},
                {link: 'Completed', expectedLength: 1},
                {link: 'All', expectedLength: 4},
            ]
            cy.wrap(filters)
            .each(filter => {
                cy.contains(filter.link)
                .click()
    
                cy.get('.todo-list li')
                .should('have.length', filter.expectedLength)
            })
            
        })
    })
})