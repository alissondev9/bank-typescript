import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit(value: number): void {
    const bonusValue = value + 10
    super.deposit(bonusValue)
  }
}
