const Aluno = require("./Aluno")
module.exports = class Contrato {
    constructor(id, Aluno, Empresa, Vaga, status) {
        this.id = id
        Aluno = Aluno
        this.Empresa = Empresa
        this.Vaga = Vaga
        this.status = status
    }
}