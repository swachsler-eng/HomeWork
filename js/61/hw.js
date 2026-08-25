
function createBankAccount(bal) {
    return {
        balance: bal,
        performTransaction(x) {
            this.balance -= x;
        }
    };
}
const bankA = createBankAccount(20);
console.log(bankA);
bankA.performTransaction(10);
console.log(bankA);

//////////
function createBankAccount2(bal) {
    return {
        balance: bal,
    };
}
 function transaction(x) {
            this.balance -= x;
};
const bankB = createBankAccount2(30);
transaction.call(bankB, 10);
console.log(bankB);

/////
const withdraw5FromBankB = transaction.bind(bankB, 5);
withdraw5FromBankB();
console.log(bankB);
