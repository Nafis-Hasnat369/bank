// handle deposit button event
document.getElementById("deposit-button").addEventListener("click", function () {
    // get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = parseFloat(depositInput.value);

    // update deposit total 
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear input
    depositInput.value = null;
});
// handle withdraw button event

document.getElementById("withdraw-button").addEventListener("click", function () {
    // get the withdraw amount
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    // update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceAmount = parseFloat(balanceTotal.innerText);

    const newBalance = balanceAmount - newWithdrawAmount;

    balanceTotal.innerText = newBalance;

    // clear input
    withdrawInput.value = null;
});