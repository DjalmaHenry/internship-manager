const Sequelize = require('sequelize')
const conn = require("../database/database")

const Contract = conn.define("student_contract", {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    RA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    job_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    internship_avaliation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    internship_checklist: {
        type: Sequelize.STRING,
        allowNull: false
    }


})

Contract.sync({ force: false }).then(() => {
    console.log("contract table retrieved")
})
module.exports = Contract