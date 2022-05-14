const Sequelize = require('sequelize')
const conn = require("../database/database")

const Student = conn.define('students', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RA: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Student.sync({ force: false }).then(() => {
    console.log("student table retrieved")
})

module.exports = Student;





/*
module.exports = class Student {
    constructor(name, RA, status) {
        this.name = name
        this.RA = RA
        this.status = status
    }

    get name(){
        return this.name

    }

    set name(name){
        this.name = name
    }

    get RA(){
        return this.RA
    }

    set RA(RA){
        this.RA = RA
    }

    get status(){
        return this.status
    }
    set status(status){
        this.status = status
    }
}
*/