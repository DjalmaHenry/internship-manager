const Sequelize = require('sequelize')
const conn = require('../database/database')

const Company = conn.define('company', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Company.sync({ force: false }).then(() => {
    console.log("company table retrieved")
})

module.exports = Company;