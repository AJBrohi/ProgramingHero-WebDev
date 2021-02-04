function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    let productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = document.getElementById(product + '-total');
    if (product == 'phone') {
        productTotal.innerText = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal.innerText = productNewCount * 59;
    }
    calculateTotal();
}

function calculateTotal() {
    const phonePrice = count('phone');
    const casePrice = count('case');

    const totalPrice = phonePrice + casePrice;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    const taxTotal = parseFloat(tax);
    document.getElementById('tax').innerText = taxTotal;

    const grandTotal = totalPrice + taxTotal;
    document.getElementById('grand-total').innerText = grandTotal;
}

function count(product) {
    const input = document.getElementById(product+'-count');
    const count = parseInt(input.value);
    let price = 0;
    if (product == 'phone') {
        price = count * 1219;
    } if (product == 'case') {
        price = count * 59;
    }
    return price;
}