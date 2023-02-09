const App = require("./App");

App.createUser('lucas@email.com', 'Lucas')
App.createUser('isaac@email.com', 'Isaac')
App.createUser('Juliana@email.com', 'Juliana')

App.deposit('lucas@email.com', 2000)

App.changeLoanFee(10)
App.takeLoan('Juliana@email.com', 2000, 24)
App.transfer('lucas@email.com', 'isaac@email.com', 500)

console.log(App.findUser("lucas@email.com"))    
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("Juliana@email.com").account)
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("Juliana@email.com").account)
console.log(App.findUser("Juliana@email.com").account.loans[0].installments)













