const Installment = require("./Installment");

class Loan {

    static #feesPercentage = 1.05

    constructor(value, installments) {
        this.value = value
        this.installments = []
        this.loanedAt = new Date()
        for (let i = 0; i <= installments; i++) {
            this.installments.push(
                new Installment((value * Loan.#feesPercentage) / installments, i + 1)
            )
        }
        this.loanedAt = new Date()
    }
 
    static get fee() {
        return Loan.#feesPercentage
    }

    static set fee(percentage) {
        Loan.#feesPercentage = 1 + (percentage /100)
    }
}

module.exports = Loan

