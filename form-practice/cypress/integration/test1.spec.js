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
    it("clicking on the third product anchor tag for a product and filling out the order form will allow the buy button to be clicked", () => {
        cy.get("a[name='productC']").click()
        cy.get("input[name='name']").type("Max Christ")
        cy.get("input[name='email']").type("mhchrist22@gmail.com")
        cy.get("select[name='count']").select(1)
        cy.get("input[name='deliveryCharge']").click()
        cy.get("button[type='submit']").should("not.be.disabled")
    })
    it("clicking on the fourth product, filling out the order form, and clicking the buy button shows the my order page with correct info", () => {
        cy.get("a[name='productD']").click()
        cy.get("input[name='name']").type("Derek Kafer")
        cy.get("input[name='email']").type("DK@gmail.com")
        cy.get("select[name='count']").select(4)
        cy.get("button[type='submit']").click()
        cy.contains("My Order")
        cy.contains("Derek Kafer")
        cy.contains("DK@gmail.com")
        cy.contains("Amount: 4")
        cy.contains("Delivery Expedited: No")

    })
})