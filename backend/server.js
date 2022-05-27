const express = require('express')
const app = express()
const conn = require('./database/database')
const bodyParser = require('body-parser')
const Contract = require('./model/Contract')
const Coordinator = require('./model/Coordinator')



conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({ message: 'API Rodando' })
})

//criar coordenador
app.post("/save-coordinator", (req, res) => {
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    var phone = req.body.phone
    Coordinator.create({
        name: name,
        password: password,
        email: email,
        phone: phone
    }).then(() => {
        res.send("coordinator saved")
    })
})

app.get("/coordinator", (req, res) => {
    Coordinator.findAll({
        raw: true
    }).then(coordinator => {
        res.send(coordinator)
    })
})

app.put("/update-coordinator/:id", (req, res) => {
    var id = req.params.id
    var name = req.body.name
    var password = req.body.password
    var email = req.body.email
    var phone = req.body.phone
    Coordinator.update({
        name: name,
        password: password,
        email: email,
        phone: phone
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.send("coordinator updated")
    })
})

app.delete("/delete-coordinator/:id", (req, res) => {
    var id = req.params.id
    Coordinator.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.send("coordinator " + " " + id + " " + " deleted")
    })
})

//listar alunos
app.get("/all-interns", (req, res) => {
    Contract.findAll({
        raw: true
    }).then(interns => {
        res.send(interns)
    });
})
app.post("/save-intern", (req, res) => {
        var first_name = req.body.first_name
        var last_name = req.body.last_name
        var RA = req.body.RA
        var email = req.body.email
        var phone = req.body.phone
        var company_name = req.body.company_name
        var job_description = req.body.job_description
        var internship_avaliation = req.body.internship_avaliation
        Contract.create({
            first_name: first_name,
            last_name: last_name,
            RA: RA,
            email: email,
            phone: phone,
            company_name: company_name,
            job_description: job_description,
            internship_avaliation: internship_avaliation,
            status: "PENDENTE",
            internship_checklist: false
        }).then(() => {
            res.send("contract created")
        })
    })
    //atualizar aluno por RA
app.put("/update-intern/:RA", (req, res) => {
        var id = req.params.id
        var RA = req.params.RA
        var first_name = req.body.first_name
        var last_name = req.body.last_name
        var email = req.body.email
        var phone = req.body.phone
        var company_name = req.body.company_name
        var job_description = req.body.job_description
        var internship_avaliation = req.body.internship_avaliation
        var status = req.body.status
        var internship_checklist = req.body.internship_checklist
        Contract.update({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            company_name: company_name,
            job_description: job_description,
            internship_avaliation: internship_avaliation,
            status: status,
            internship_checklist: internship_checklist
        }, {
            where: {
                RA: RA
            }
        }).then(() => {
            res.send("contract" + " " + RA + " " + "updated")
        })

    })
    //deletar contrato por RA
app.delete("/delete-intern/:RA", (req, res) => {
        var RA = req.params.RA
        Contract.destroy({
            where: {
                RA: RA
            }
        }).then(() => {
            res.send("contract" + " " + RA + " " + "deleted")
        })
    })
    //buscar aluno por RA - contrato
app.get("/contract/:RA", (req, res) => {
    var RA = req.params.RA
    Contract.findOne({
        where: {
            RA: RA
        }
    }).then(intern => {
        res.send(intern)
    });
})

//buscar empresa por nome - contrato
app.get("/intern/company/:company_name", (req, res) => {
    var company_name = req.params.company_name
    Contract.findAll({
        where: {
            company_name: company_name
        }
    }).then(intern => {
        res.send(intern)
    })
})

module.exports = app