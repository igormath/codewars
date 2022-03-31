validatePIN = (pin) => {
    let isValid = false, cont = 0;

    for (let i = 0; i < pin.length; i++) {
        if (/^([0-9])$/.test(pin.charAt(i))) {
            cont++;
        }
    }

    if (((pin.length === 4) || (pin.length === 6)) && (cont === pin.length)) {
        isValid = true;
    }

    return isValid;
}
