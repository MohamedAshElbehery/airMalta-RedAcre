class flights{

    

    elements ={
        
        flexibleDatesLink : ()=> cy.xpath('//a[contains(text(),"Flexible dates")]'),
        outBoundFlightHeader : ()=> cy.xpath('//h4[contains(text(),"Outbound Flight")]')

    }

    

    clickFlexibleDates(){

        this.elements.flexibleDatesLink().click()

    }

}

module.exports = new flights();


require('@cypress/xpath')