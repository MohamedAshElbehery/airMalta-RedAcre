import homePage from "../pages/homePage";

describe('Getting first available flight price', () => {


    it('Getting one way trip flight price', () => {
      
        let date = homePage.getTodayDate()

        homePage.navigate()

        homePage.selectOneWayTrip()

        homePage.selectDepartingFromAirport("Vienna International")

        homePage.selectDepartingFromAirport("Malta International Airport")

        homePage.selectDepartureDate(date)

        homePage.clickFindFlights()

        cy.url().should('equal','https://book.airmalta.com/flights/oneway')

    })
  })