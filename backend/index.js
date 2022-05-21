const express = require('express')
const app = express()
const conn = require('./database/database')
const bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/", (req, res) => {
        res.send("API rodando")
    })
    //criar coordenador
app.post("/save-coordinator", (req, res) => {
        var name = req.body.name
        var password = req.body.password
        var contactId = req.body.contactId
        Coordinator.create({
            name: name,
            password: password,
            contactId: contactId
        })
    })
    //listar alunos
app.get("/all-interns", (req, res) => {
        Student.findAll({
            raw: true
        }).then(interns => {
            res.send(interns)
        });
    })
    //listar aluno por id
app.get("/intern/:id", (req, res) => {
        var id = req.params.id
        Student.findOne({
            where: {
                id: id
            }
        }).then(intern => {
            res.send(intern)
        });

    })
    //criar aluno
app.post("/save-intern", (req, res) => {
        var first_name = req.body.first_name
        var last_name = req.body.last_name
        var RA = req.body.RA
        var status = req.body.status
        var contractId = req.body.contractId
        var contactId = req.body.contactId
        Student.create({
            first_name: first_name,
            last_name: last_name,
            RA: RA,
            status: status,
            contractId: contractId,
            contactId: contactId
        }).then(() => {
            res.redirect("/")
        })
    })
    //atualizar aluno por id
app.put("/update-intern/:id", (req, res) => {
        var id = req.params.id
        var first_name = req.body.first_name
        var last_name = req.body.last_name
        var RA = req.body.RA
        var status = req.body.status
        var contractId = req.body.contractId
        var contactId = req.body.contactId
        Student.update({
            first_name: first_name,
            last_name: last_name,
            RA: RA,
            status: status,
            contractId: contractId,
            contactId: contactId

        }, {
            where: {
                id: id
            }
        }).then(() => {
            res.send("intern" + " " + id + " " + "updated")
        })
    })
    //deletar aluno por id
app.delete("/delete-intern/:id", (req, res) => {
    var id = req.params.id
    Student.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.send("intern" + " " + id + " " + "deleted")
    })
})

app.listen(8080, () => {
    console.log("Server running on localhost:8080")
})