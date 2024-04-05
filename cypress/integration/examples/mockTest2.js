/// <reference types = "cypress" />

describe("Mock tests for Request", function(){
    it ("Mock Request", function(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
       
        //Mock request to another author, this should fail as it is not allowed
        req.continue((res)=>
        {
            expect(res.statusCode).to.equal(403)
        })
     }
     ).as("dummyUrl")
     
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@dummyUrl')
     
    })
     
    })
     