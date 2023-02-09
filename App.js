const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

class App {
    static #users = []

    static findUser(email) {
        const user = App.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, name) {
        const userExists = App.findUser(email)
        if(!userExists) {
            App.#users.push(new User(email, name))
        }
    }   

    static deposit(email, value) {
        const user = App.findUser(email)
        if(user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(senderEmail, receiverEmail, value) {
        const sender = App.findUser(senderEmail)
        const receiver = App.findUser(receiverEmail)
        if (senderEmail && receiverEmail) {
            const newTransfer = new Transfer(sender, receiver, value)
            sender.account.addTransfer(newTransfer)
            receiver.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newPercentage) {
        Loan.fee = newPercentage
    }

    static showUsers() {
        return App.#users
    }
}

module.exports = App