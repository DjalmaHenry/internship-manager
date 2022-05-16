const express = require('express')
const app = express()
const conn = require('./database/database')
const Student = require('./model/Student')
const Contract = require('./model/Contract')
const Contact = require('./model/Contact')
const Ocupation = require('./model/Ocupation')
const Coordinator = require('./model/Coordinator')
const Report = require('./model/Report')
const Company = require('./model/Company')


conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})


app.get("/", (req, res) => {
    res.send("API rodando")
})

app.listen(8080, () => {
    console.log("Server running on localhost:8080")
})