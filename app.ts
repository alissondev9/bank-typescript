import { CompanyAccount } from "./class/CompanyAccount"
import { BonusAccount } from "./class/BonusAccount"
import { DioAccount } from "./class/DioAccount"

class PersonalAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
}

const personal = new PersonalAccount("João", 1)
const company = new CompanyAccount("Empresa X", 2)
const bonus = new BonusAccount("Maria", 3)

console.log("\n--- Conta Pessoal ---")
personal.deposit(100)
personal.withdraw(30)

console.log("\n--- Conta Empresa ---")
company.deposit(200)
company.getLoan(500)
company.withdraw(100)

console.log("\n--- Conta Bônus ---")
bonus.deposit(100) // deve depositar 110
bonus.withdraw(50)
