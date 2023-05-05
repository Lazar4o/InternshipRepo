let account = {
    accountNumber: 56786142328885,
    balance: 3639,
    accountHolder: 'Pericles, the Inspired Statesman'
}
function withdrawMoney(userAccount, withdrawAmount) {
    userAccount.balance -= withdrawAmount;
    console.log(userAccount.balance);
    if (userAccount.balance < 0) {
        console.log(`You are in debt! Congratulations!`)
    }
}
function depositMoney(userAccount, withdrawAmount){
    userAccount.balance += withdrawAmount;
    console.log(userAccount.balance);
}

withdrawMoney(account, 32322)
depositMoney(account, 60000)