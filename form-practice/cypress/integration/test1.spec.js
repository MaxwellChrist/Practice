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
        cy.contains("Joke 1")
        cy.contains("Joke 2")
        cy.contains("Joke 3")
        cy.contains("Joke 4")
    })
    it("clicking on one of the first product anchor tag will go to that products order form", () => {
        cy.get("a[name='joke1']").click()
        cy.contains("If you like this joke and care to buy it, fill out the form below:")
    })
    it("clicking on the second product anchor tag for a product will show an order form page with the buy button originally disabled", () => {
        cy.get("a[name='joke2']").click()
        cy.get("button[type='submit']").should("be.disabled")
    })
    it("clicking on the third product anchor tag for a product and filling out the order form will allow the buy button to be clicked", () => {
        cy.get("a[name='joke3']").click()
        cy.get("input[name='name']").type("Max Christ")
        cy.get("input[name='email']").type("mhchrist22@gmail.com")
        cy.get("select[name='count']").select(1)
        cy.get("input[name='deliveryCharge']").click()
        cy.get("button[type='submit']").should("not.be.disabled")
    })
    it("clicking on the fourth product, filling out the order form, and clicking the buy button shows the my order page with correct info", () => {
        cy.get("a[name='joke4']").click()
        cy.get("input[name='name']").type("Derek Kafer")
        cy.get("input[name='email']").type("DK@gmail.com")
        cy.get("select[name='count']").select(4)
        cy.get("button[type='submit']").click()
        cy.contains("My Order")
        cy.contains("Derek Kafer")
        cy.contains("DK@gmail.com")
        cy.contains("Amount of Stars: 4")
        cy.contains("Delivery Expedited: No")

    })
})