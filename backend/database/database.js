const Sequelize = require('sequelize')
const conn = new Sequelize('internshipmanager', 'root', '1234567', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;