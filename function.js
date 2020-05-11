function addition(firstNbr, secondNbr) {
    return firstNbr + secondNbr;
}

function soustraction(firstNbr, secondNbr) {
    return firstNbr - secondNbr;
}

function division(firstNbr, secondNbr) {
    if (secondNbr == 0) {
        throw new Error('Impossible de diviser par 0.');
    }
    return firstNbr / secondNbr;
}

function multiplication(firstNbr, secondNbr) {
    return firstNbr * secondNbr;
}