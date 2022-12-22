/// <reference types="cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using fiuxture', function() {
    cy.fixture('example.json').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
        cy.log (data.body)
    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })

} )

it('Write file demo test', () => {
    cy.writeFile('sample.txt', 'Hello, my name is Ndifreke \n')
    cy.writeFile('sample.txt', 'I am learning Cypress', {flag: 'a+'})
})