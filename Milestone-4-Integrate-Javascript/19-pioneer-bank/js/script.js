//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    // const transactionArea = document.getElementById('transaction-area');
    // transactionArea.style.display = 'block';

    // const calculationArea = document.getElementById('calculation-area')
    // calculationArea.style.display = 'block';

    let nextPage = document.querySelectorAll('#transaction-area, #calculation-area');
    for (var i = 0; i < nextPage.length; i++) {
        nextPage[i].style.display = 'block';
    }
})

//deposit button event handler
const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener('click', function () {
    const depositNumber = getInput('depositAmount');

    update('currentDeposit', depositNumber);
    update('currentBalance', depositNumber);
    document.getElementById('depositAmount').value = '';
})



//withdraw button event handler
const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener('click', function () {
    const withdrawNumber = getInput('withdrawAmount');

    update('currentWithdraw', withdrawNumber);
    update('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = '';
})

function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function update(id, amountNumber) {
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    let totalAmount = amountNumber + currentAmountNumber;

    document.getElementById(id).innerText = totalAmount;
}

// function update(id, amountNumber) {
//     const currentAmount = document.getElementById(id).innerText;
//     const currentAmountNumber = parseFloat(currentAmount);
//     if (currentAmountNumber <= 0) {
//         alert('Vul hoise');
//     } else {
//         console.log("ken dhuke");
//         let totalAmount = amountNumber + currentAmountNumber;
//         document.getElementById(id).innerText = totalAmount;
//     }
// }