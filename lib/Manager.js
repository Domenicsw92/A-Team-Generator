const Employee = require("./Employee")

class Manager extends Employee{

    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber

    }
    getTitle() {
        return this.title
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getGithub() {
        return this.github
    }

    getRole(){
        return "Manager"
    }
    

}

module.exports = Manager

