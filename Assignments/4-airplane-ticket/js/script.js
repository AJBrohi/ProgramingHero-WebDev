function ticketUnitChange(ticketClass, isIncrease) {
    const ticketCount = getElementOf(ticketClass + '-class-input');
    const ticketNumber = parseInt(ticketCount.value);
    const ticketNewNumber = countingTicket(ticketNumber, isIncrease);
    ticketCount.value = ticketNewNumber;

    const price = getElementOf(ticketClass + '-class-price');
    price.innerText = changePrice(ticketClass, ticketNewNumber);

    totalPriceCalculation();
}

function countingTicket(ticketNumber, increase) {
    let ticketInNumber = 0;
    if (increase == true) {
        ticketInNumber = ticketNumber + 1;
    }
    if (increase == false && ticketInNumber > 0) {
        ticketInNumber = ticketNumber - 1;
    }
    return ticketInNumber;
}

function changePrice(ticketClass, ticketNewNumber) {
    let ticketPrice = 0;
    if (ticketClass == 'first') {
        ticketPrice = ticketNewNumber * 150;
    } else {
        ticketPrice = ticketNewNumber * 100;
    }
    return ticketPrice;
}

function totalPriceCalculation() {
    const firstClassTicketPriceNumber = getInt('first-class-price');
    const economyClassTicketPriceNumber = getInt('economy-class-price');

    const total = firstClassTicketPriceNumber + economyClassTicketPriceNumber;
    getElementOf('subtotal').innerText = total;

    const totalVat = getInt('subtotal') * 0.1;
    getElementOf('vat').innerText = totalVat;

    getElementOf('grand-total').innerText = total + totalVat;
}

function getElementOf(id, needText) {
    return document.getElementById(id);
}

function getInt(id) {
    return parseInt(document.getElementById(id).innerText);
}

function buy() {
    confirm('Are you sure?');
    alert('Thank you for purchasing from us.\n Get ready to fly.');
}