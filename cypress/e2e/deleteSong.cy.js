describe('Delete Button', () => {
  it('Deletes a Song', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Frontlines')
    .parents('tr')
    .find('button')
    .contains('Delete')
    .click()
  })
})