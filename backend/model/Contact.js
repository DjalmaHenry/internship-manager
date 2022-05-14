const Sequelize = require('sequelize')
const conn = require('../database/database')

const Contact = conn.define('contacts', {
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    }
});

Contact.sync({ force: false }).then(() => {
    console.log("contact table retrieved")
})

module.exports = Contact;




/*
module.exports = class Contact {
    constructor(phone, email){
        this.phone = phone
        this.email = email
    }

    get phone(){
        return this.phone
    }

    set phone(phone){
        this.phone = phone
    }

    get email(){
        return this.email
    }

    set email(email){
        this.email = email
    }
}
*/