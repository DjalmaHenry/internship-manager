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