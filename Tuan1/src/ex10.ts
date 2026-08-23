class Account {
  public accountHolder: string;
  private balance: number;
  readonly accountNumber: string;

  constructor(accountHolder: string, balance: number, accountNumber: string) {
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.accountNumber = accountNumber;
  }

  showBalance(): void {
    console.log(`Số dư của tài khoản ${this.accountNumber} là: ${this.balance}`);
  }
}

const acc = new Account("Trương Nhật", 5000, "ACC12345");
console.log(`Chủ tài khoản: ${acc.accountHolder}`);
console.log(`STK (readonly): ${acc.accountNumber}`);
acc.showBalance();