// test01.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// Add pet to the store

describe('Given the pet API', () => {
    context('When I send POST /PET', () => {
        it('Then it should create a new pet', () => {
            cy.request({
                method: 'POST',
                url:'/pet',
                body:{
                    id: 14,
                    category: {
                        id: 1,
                        name: "Doggo"
                    },
                    name: "Shibe",
                    photoUrls: [
                        "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4"
                    ],
                    tags: [
                        {
                        id: 2,
                        name: "Husky"
                        }
                    ],
                    status: "available"
                }
            }).should((response) =>{
                expect(response.status).eq(200)
                expect(response.body[0].id).eq(14)
            })
        });
    });
});