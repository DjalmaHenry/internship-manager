const Student = require("./Student")
module.exports = class Contract {
    constructor(id, Student, company, ocupation, status) {
        this.id = id
        Student = Student
        this.company = company
        this.ocupation = ocupation
        this.status = status
    }
}