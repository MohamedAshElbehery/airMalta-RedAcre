class calendar{

    

    elements ={
        
        flexibileDatesHeader : ()=> cy.xpath('//h4[contains(text(),"Flexible dates")]'),

        todayFlightButton : (date)=> cy.xpath(`//div[contains(text(),'${date}')]`, {timeout:3000}),

        firstAvailablePrice : (date)=> cy.xpath(`(//div[contains(text(),'${date}')]//following::div[contains(text(),'.')])[1]`),
        
        continueToFlightButton : ()=> cy.xpath('//button[contains(text(),"Continue to flights")]'),

        nextThreeWeeksButton : ()=> cy.xpath('//span[contains(text(),"next 3 weeks")]')
    }

    
    //getting the first available price starting from our departing date, 
    //if not found it will search for the nearest button that has a price
    getFirstAvailableFlightPrice(date){

        let firstAvailableFlightPrice

       cy.wait(5000)

        this.elements.firstAvailablePrice(date).should('be.visible')

        firstAvailableFlightPrice =  this.elements.firstAvailablePrice(date).invoke('text')

       return firstAvailableFlightPrice

    }

    navigate(){

        cy.visit('https://book.airmalta.com/calendar/oneway')

    }

    clickFirstAvailablePrice(date){

        this.elements.firstAvailablePrice(date).click()

    }

    clickContinueToFlightButton(){

        this.elements.continueToFlightButton().click()

    }

    //getting today's date as the departing day and clean it to be used in a starting point to search in the table
    getStartDate(){

        let startDate = new Date().toUTCString().slice(5,11)

        return startDate
    }

}

module.exports = new calendar();


require('@cypress/xpath')