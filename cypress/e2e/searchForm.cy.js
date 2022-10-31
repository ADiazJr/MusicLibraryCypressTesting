describe('Search Form', () => {
  it('Searches For a Song', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(4) > input').type('Three Little Birds')
    cy.wait(300)
    cy.get('.center').contains('Three Little Birds')
  })
})