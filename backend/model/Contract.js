const Student = require("./Student")
const Company = require("./Company")
module.exports = class Contract {
    constructor(id, ocupation, status) {
        this.id = id
        Student = Student
        Company = Company
        this.ocupation = ocupation
        this.status = status
    }

    get id(){
        return this.id
    }

    set id(id){
        this.id = id
    }

    get Student(){
        return this.student
    }

    set Student(Student){
        this.Student = Student
    }
    
    get Company(){
        return this.Company
    }

    set Company(Company){
        this.Company = Company
    }
    
    get ocupation(){
        return this.ocupation
    }

    set ocupation(ocupation){
        this.ocupation = ocupation
    }

    get status(){
        return this.status
    }
    set status(status){
        this.status = status
    }
    
}

