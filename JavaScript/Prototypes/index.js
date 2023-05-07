function BankAccount(currentAmount) {
    this.currentAmount = currentAmount;
    document.querySelector('#amount').textContent = currentAmount; 
    this.depositMoney = function() {
        let depositMoney = Number(document.querySelector('#deposit').value);
        currentAmount += depositMoney;
        document.querySelector('#amount').textContent = currentAmount;
    }
    this.withdrawMoney = function() {
        let withdrawMoney = Number(document.querySelector('#withdraw').value);
        if (withdrawMoney > currentAmount ) {
            alert(`Error!?! ${'\n'}Did you try to withdraw more than you have?!`)
            return
        }
        currentAmount -= withdrawMoney;
        document.querySelector('#amount').textContent = currentAmount;
    }
}
let person = new BankAccount(Number(prompt('How much initial money do you have?')));
document.querySelector('#deposit-btn').addEventListener('click', person.depositMoney);
document.querySelector('#withdraw-btn').addEventListener('click', person.withdrawMoney);
