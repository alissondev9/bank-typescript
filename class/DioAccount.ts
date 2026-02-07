export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getAccountNumber(): number {
    return this.accountNumber
  }

  getBalance(): number {
    return this.balance
  }

  protected setBalance(value: number): void {
    this.balance = value
  }

  getStatus(): boolean {
    return this.status
  }

  deposit(value: number): void {
    if (this.status && value > 0) {
      this.balance += value
      console.log(`Depósito de ${value} realizado. Saldo atual: ${this.balance}`)
    } else {
      console.log("Conta inativa ou valor inválido.")
    }
  }

  withdraw(value: number): void {
    if (!this.status) {
      console.log("Conta inativa.")
      return
    }

    if (this.balance < value) {
      console.log("Saldo insuficiente.")
      return
    }

    this.balance -= value
    console.log(`Saque de ${value} realizado. Saldo atual: ${this.balance}`)
  }
}
