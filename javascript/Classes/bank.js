class bank {
  balance = 0;
  constructor(balance) {
    this.balance = this.balance + balance;
  }

  credit(balance) {
    this.balance = this.balance + balance;
  }
  debit(balance) {
    this.balance = this.balance - balance;
  }
  getBalance() {
    return this.balance;
  }
}
const user = new bank(500);
user.credit(100);
user.credit(100);
user.credit(100);

console.log(user.getBalance());
