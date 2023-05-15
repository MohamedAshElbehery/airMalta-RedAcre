import homePage from "../pages/homePage";
import flights from "../pages/flights";
import calendar from "../pages/calendar";

describe('Getting first available flight price', () => {


    it('Getting one way trip flight price', () => {
        
        //getting today's date and clean it to be able to use it in finding objects
        let todayDate = homePage.getTodayDate()

        //navigate to air malta url
        homePage.navigate()

        //selecting on way trip option
        homePage.selectOneWayTrip()

        //selecting airports
        homePage.selectDepartingFromAirport("Vienna International")

        homePage.selectDepartingFromAirport("Malta International Airport")

        //selecting the departure date and passing to it today's date in a clean format
        homePage.selectDepartureDate(todayDate)

        //clicking on find flights button
        homePage.clickFindFlights()

        //asserting we got redirected to the right url with the right page header
        cy.url().should('equal','https://book.airmalta.com/flights/oneway')

        flights.elements.outBoundFlightHeader().should('exist')

        //clicking on flexibile dates
        flights.clickFlexibleDates()

        //asserting we got redirected to the right url with the right page header
        cy.url().should('equal','https://book.airmalta.com/calendar/oneway')

        calendar.elements.flexibileDatesHeader().should('exist')

        //get the the starting date on the other clean format to pass it to the objects
        let startDate = calendar.getStartDate()

        //getting the first available flight price, and asserting it's not equal to null and has a number value
        calendar.getFirstAvailableFlightPrice(startDate).should('not.be.null').and('contain','.')

        //choosing the first available flight
        calendar.clickFirstAvailablePrice(startDate)

        //clicking on the flight button
        calendar.clickContinueToFlightButton()

        //asserting we got redirected to the right url with the right page header
        cy.url().should('equal','https://book.airmalta.com/flights/oneway')

        flights.elements.outBoundFlightHeader().should('exist')




        

    })
  })