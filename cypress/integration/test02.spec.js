//add pet to the store and get the data

describe('Chaining 2 API To Find Newly Added Pet', function(){
    it('Chain two API request', () => {
        //Add pet
        cy.request({
            method: 'POST',
            url:'/pet',
            body:{
                id: 16,
                category: {
                    id: 15,
                    name: "Dog"
                },
                name: "Shibe",
                photoUrls: [
                    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4"
                ],
                tags: [
                    {
                    id: 100,
                    name: "Kiyowo"
                    }
                ],
                status: "available"
            }
        }).then((response) => {
            const petId = response.body[0].id
            return petId
        })
        //GET METHOD
            .then((petId) => {
                cy.request({
                    METHOD: 'GET',
                    url: '/pet/' + petId
                }).should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body[0].id).to.have.property('id', petId)
                })
            })
    })
})