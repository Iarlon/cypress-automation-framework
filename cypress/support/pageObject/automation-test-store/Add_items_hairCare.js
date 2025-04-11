class Add_items{
    Add_hairCare_items_to_basket (productName){
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text() === productName) {
                cy.log($el.text());
                cy.get('.productcart').eq(index).click();
            }
        });
    }
}
export default Add_items;