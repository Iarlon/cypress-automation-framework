describe("Test file upload via webdriveruni", () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
        
    });
    it("Upload a file", () => {
        cy.get('#myFile').selectFile('cypress/fixtures/example.json')
        cy.get('#submit-button').click();
      
    })
    it('Upload no file', () => {
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            return true;
        })
        
    });
  
  
});
  