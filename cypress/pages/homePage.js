class homePage{

    

    elements ={
        
        tripTypeInput : ()=> cy.xpath('//input[@title="Round trip"]'),

        oneWayOption : ()=> cy.xpath('//div[contains(text(),"One way")]'),

        departingFromInput : ()=> cy.xpath('(//div[contains(text(),"Search airport")])[1]'),

        flyingToInput : ()=> cy.xpath('(//div[contains(text(),"Search airport")])[2]'),

        airportOption : (airport)=> cy.xpath(`//div[contains(text(),'${airport}')]`),

        departureDateInput : ()=> cy.xpath('//input[@name="DepartureDate1"]'),

        returnDateInput : ()=> cy.xpath('//input[@name="DepartureDate2"]'),

        datePickerDiv : (date)=> cy.xpath(`//div[@aria-label='${date}']`),

        findFlightsButton : ()=> cy.xpath('//button[contains(text(),"Find flights")]')
    }

    getTodayDate(){

        let todayDate = new Date().toString().slice(0,15)

        return todayDate
    }

    navigate(){

        cy.visit('https://airmalta.com/')

    }

    selectOneWayTrip(){

        this.elements.tripTypeInput().click()

        this.elements.oneWayOption().click()

    }

    selectDepartingFromAirport(airport){
       
        this.elements.departingFromInput().type(airport)

        this.elements.airportOption(airport).click()

    }

    selectFlyingToAirport(airport){
       
        this.elements.flyingToInput().type(airport)

        this.elements.airportOption(airport).click()

    }

    selectDepartureDate(date){

        this.elements.departureDateInput().click()

        cy.wait(2000)

        this.elements.datePickerDiv(date).click()
    }

    clickFindFlights(){

        this.elements.findFlightsButton().click()
    }

}

module.exports = new homePage();


require('@cypress/xpath')