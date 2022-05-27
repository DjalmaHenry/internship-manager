const request = require("supertest")
const app = require("./server")

describe('Testing API', () => {
    it('should test get main route', async() => {
        const res = await request(app).get("/")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
    it('should test get a contract with the RA 4954', async() => {
        const res = await request(app).get("/contract/4954")
        expect(res.statusCode).toEqual(200)
    })
    it('should test post a contract', async() => {
        const res = await request(app)
            .post("/save-intern")
            .send({
                first_name: "teste",
                last_name: "sobrenome teste",
                RA: 26,
                email: "teste@mail.com",
                phone: "81996320265",
                company_name: "Stilingue",
                job_description: "testes unitariostestes unitarios",
                internship_avaliation: "faco testes"
            })
        expect(res.statusCode).toEqual(200)
    })
    it('should test update a contract with the RA 26', async() => {
        const res = await request(app).put("/update-intern/26").send({
            first_name: "teste ATUALIZADO",
            last_name: "sobrenome ATUALIZADO",
            email: "atualizado@mail.com",
            phone: "999999999",
            company_name: "Unicap",
            job_description: "testes atualizados",
            internship_avaliation: "faco testes atualizados"
        })
        expect(res.statusCode).toEqual(200)
    })
    it('should test delete a contract with the RA 26', async() => {
        const res = await request(app).delete("/delete-intern/26")
        expect(res.statusCode).toEqual(200)
    })
    it('should test find contracts by company name Stilingue', async() => {
        const res = await request(app).get("/intern/company/Stilingue")
        expect(res.statusCode).toEqual(200)
    })
})