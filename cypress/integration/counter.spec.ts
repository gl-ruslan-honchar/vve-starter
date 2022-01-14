context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('counter single click', () => {
    cy.visit('/counter')

    cy.get('span.count').contains(0)

    cy.get('button.btn').click()

    cy.get('span.count').contains(1)
  })

  it('counter multiple clicks', () => {
    cy.visit('/counter')

    cy.get('span.count').contains(0)

    for (let n = 0; n < 10; n++) {
      cy.get('button.btn').click()
    }

    cy.get('span.count').contains(10)
  })
})
