import BankAccount from "./balanceUtility.js";

let bank1 = new BankAccount(-200);
let bank2 = new BankAccount(25);
let bank3 = new BankAccount(10000);

console.log(bank1.getBalance());
console.log(bank2.getBalance());
console.log(bank3.getBalance());

bank1.setBalance(99.9);
bank2.setBalance(-500);
bank3.setBalance(0);

console.log(`After Set Balance`
);
console.log(bank1.getBalance());
console.log(bank2.getBalance());
console.log(bank3.getBalance());

bank1.loopMethod();
bank2.loopMethod();
bank3.loopMethod();