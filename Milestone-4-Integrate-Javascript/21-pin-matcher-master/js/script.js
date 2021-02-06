function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin
    } else {
        return getPin();
    }
}

function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    let digits = event.target.innerText;
    const typedInput = document.getElementById('typed-pin');
    if (isNaN(digits)) {
        if (digits == 'C') {
            typedInput.value = '';
        }
        if (digits == 'B') {
            typedInput.value = (typedInput.value).slice(0, (typedInput.value).length - 1);
        }
    }
    else {
        typedInput.value = typedInput.value + digits;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;

    if (pin == typedPin) {
        displayMatch('block', 'none');
    }
    else {
        displayMatch('none', 'block');
        changeTries();
    }
}

function displayMatch(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}

function changeTries() {
    const tries = document.getElementById('tries');
    const triesNumber = parseInt(tries.innerText) - 1;
    if (triesNumber >= 0) {
        tries.innerText = triesNumber;
    }
    else{
        tries.innerText = 'No'
        displayMatch('none', 'none');
    }
}