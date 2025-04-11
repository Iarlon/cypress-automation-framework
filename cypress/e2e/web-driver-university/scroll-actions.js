describe("Test mouse actions", () => {  
    it("Scroll element into view", () => {
        cy.visit("https://www.webdriveruniversity.com")

        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })
    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mouseover').trigger('mouseup', {force:true})

        cy.get('#droppable')
    })
    it("I should be able to double mouse click an item", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#double-click').dblclick()
    })
    it.only("I should be able to click and holddown a specific item", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.text('Well done! keep holding that click now.....')
        })
    })
})
