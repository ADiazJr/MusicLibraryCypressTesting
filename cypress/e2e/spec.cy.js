describe('Music Library', () => {
  it('Adds a song', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="title"]').type('Frontlines')
    cy.get('[data-test="artist"]').type('Zeds Dead')
    cy.get('[data-test="album"]').type('Northern Lights')
    cy.get('[data-test="genre"]').type('Dance')
    cy.get('[data-test="date"]').type('2016-10-10')
    cy.get('.formDiv > form > button').click()
  })
})