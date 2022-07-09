it ("just checking", () => {
    expect(1+1).to.equal(2)
})

describe("testing form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it("anchor tags exist and are showing in the navbar", () => {
        cy.get("nav")
        cy.contains("Home")
        cy.contains("Product A")
        cy.contains("Product B")
        cy.contains("Product C")
        cy.contains("Product D")
    })
    it("clicking on one of the first product anchor tag will go to that products order form", () => {
        cy.get("a[name='productA']").click()
        cy.contains("Product A Order Form")
    })
    it("clicking on the second product anchor tag for a product will show an order form page with the buy button originally disabled", () => {
        cy.get("a[name='productB']").click()
        cy.get("button[type='submit']").should("be.disabled")
    })
})