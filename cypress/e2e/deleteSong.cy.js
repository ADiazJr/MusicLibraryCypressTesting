describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Frontlines')
    .parents('tr')
    .find('button')
    .contains('Delete')
    .click()
  })
})