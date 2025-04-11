describe("Handlig data via webdriveuni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate the age of all the users", () => {
        var userDetails = [];
        var num = 0;

        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
          userDetails[index] = $el.text();

        }).then(() => {
          var i;
          for(i = 1; i < userDetails.length; i++) {
            if(Number(userDetails[i])) 
              {
              num += Number(userDetails[i])
            }
            // cy.log(userDetails[i]);
          }
          cy.log("The total age is: "+num);
          expect(num).eq(322);
        })
      });

      it.only("Found the age of a user by his last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
          const text = $el.text();
          if(text == "Woods"){
            cy.get('#thumbnail-1 tr td:nth-child(3)').eq(index).then((age) => {
              const userAge = age.text();
              expect(userAge).to.equal("80");
            })

          }
        });

      });
  });
    