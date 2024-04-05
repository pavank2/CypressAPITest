/// <refernce types = "Cypress" />

describe ("API Tests",function(){
    it ("API Test",function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            

                "name":"Learn Appium Automation with Java 3",
                "isbn":"bvdn",
                "aisle":"230",
                "author":"John Doe"
            }).then(function(response){
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
    })

})
})