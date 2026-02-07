import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan(value: number): void {
    if (this.getStatus() && value > 0) {
      const newBalance = this.getBalance() + value
      this.setBalance(newBalance)
      console.log(`Empréstimo de ${value} aprovado. Saldo atual: ${newBalance}`)
    } else {
      console.log("Conta inativa ou valor inválido.")
    }
  }
}
