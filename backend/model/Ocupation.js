const Sequelize = require('sequelize')
const conn = require('../database/database')

const Ocupation = conn.define("ocupation", {
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    companyId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Ocupation.sync({ force: false }).then(() => {
    console.log("ocupation table retrieved")
})
module.exports = Ocupation





/*const Company = require("./Company")

module.exports = class Ocupation{
    constructor(description){
        this.description = description
        Company = Company
    }

    get description(){
        return this.description
    }

    set description(description){
        this.description = description
    }

    get Company(){
        return Company
    }

    set Company(Company){
        Company = Company
    }
}
*/