export default class BankAccount{
    #balance;
    constructor(amount){
this.#balance=amount;
    }
    setBalance(amount){
        this.#balance=amount;
    }

    getBalance(){
        return this.#balance;
    }

    credit(amount){
        this.#balance+=amount;
    }

    debit(amount){
        this.#balance-=amount;
    }

    static randomNum(){
    return  Math.floor(Math.random()*(1001-(-1000+1)))+-1000;
    
    }

    loopMethod(){
        console.log(`Loop`);
        for (let i = 0; i <= 5; i++){
        this.credit(BankAccount.randomNum());
        console.log(this.getBalance());
        }
        console.log(`    `);
    }
}