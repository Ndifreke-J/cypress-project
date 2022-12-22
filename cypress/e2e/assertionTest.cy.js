
it('Assertion Test', () => {


    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button') 
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')
    expect('button').to.be.equal('button')

    assert.equal(2, '2', 'Not Equal')
    // assert.strictEqual(2, '2', 'Not Equal')
  })