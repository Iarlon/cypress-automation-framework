describe("Test datepicker via webdriveruni", () => {
      it("Select date from the datepicker", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
        
        cy.get('#datepicker').click();

        // let date = new Date();
        // date.setDate(date.getDate());
        // cy.log(date.getDate());

        // let futureDate = new Date();
        // futureDate.setDate(futureDate.getDate() + 5);
        // cy.log(futureDate.getDate());

        var date = new Date();
        date.setDate(date.getDate() + 720);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("en-Us", {month: "long"})
        var futureDay = date.getDate();

        cy.log("Date: " + date);
        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear) || !currentDate.text().includes(futureMonth)){
                    cy.get('.next').first().click();
                    cy.wait(500);
                    selectMonthAndYear();

                }
            })
                
        }
        
      function selectFutureDay() {
        cy.get('.day').contains(futureDay).click();
      }
        
    selectMonthAndYear();
    selectFutureDay();
      })
    
    
  });
    