function getInputValue(id) {
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.value);
    inputField.value = "";
    return value;
};
function updateTotal(id, amount) {
    let totalTag = document.getElementById(id);
    const prviousValue = parseFloat(totalTag.innerText);
    totalTag.innerText = prviousValue + amount;
};
function getInnerTextValue(id) {
    const fieldId = document.getElementById(id);
    const fieldValue = parseFloat(fieldId.innerText);
    return fieldValue;
}
function updateBalance(amount, isValid) {
    let balance = document.getElementById("balance-total");
    const balanceValue = parseFloat(balance.innerText);
    if (amount > 0) {
        if (isValid == true) {
            balance.innerText = balanceValue + amount;
        }
        else if (isValid == false) {
            balance.innerText = balanceValue - amount;
        }
    }
};
// deposit button 
document.getElementById("deposit-button").addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    updateTotal("deposit-total", amount);
    updateBalance(amount, true);
});
document.getElementById("withdraw-button").addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if (amount <= balance) {
        updateTotal("withdraw-total", amount);
        updateBalance(amount, false);
    }
});