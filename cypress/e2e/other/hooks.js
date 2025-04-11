describe("Test file upload via webdriveruni", () => {
    
    before(() => {
        cy.log(' root-level hook')
        cy.log(' runs once befor all tests')
      })
      
      beforeEach(() => {
        cy.log(' root-level hook')
        cy.log(' runs before every test block')
      })
      
      afterEach(() => {
        cy.log(' runs after each test block')
      })
      
      after(() => {
        cy.log(' runs once all tests are done')
      })
  
      it('example test 1', () => {
        cy.log(' example test 1')
      })
    
    it('example test 2', () => {
            cy.log(' example test 2')
        })
  
});
  