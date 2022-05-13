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