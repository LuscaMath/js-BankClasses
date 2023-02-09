const Account = require("./Account")

class User {
    
    constructor(email, name) {
        this.email = email
        this.name = name
        this.account = new Account(this)
    }
}

module.exports = User