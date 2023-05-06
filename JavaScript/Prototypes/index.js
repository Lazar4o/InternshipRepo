let currentAmount = Number(document.querySelector('#amount').innerHTML);

    function depositMoney() {
        let depositMoney = Number(document.querySelector('#deposit').value);
        currentAmount += depositMoney;
        document.querySelector('#amount').innerHTML = currentAmount;
    }

    function withdrawMoney() {
        let withdrawMoney = Number(document.querySelector('#withdraw').value);
        if (withdrawMoney > currentAmount ) {
            alert(`Error!?! ${'\n'}Did you try to withdraw more than you have?!`)
            return
        }

        currentAmount -= withdrawMoney;
        document.querySelector('#amount').innerHTML = currentAmount;
    }