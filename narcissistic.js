narcissistic = (value) => {
    let valueString = '', dividedNumber = [], powArray = [], sumArrayResult = 0, isNarcissistic = false;
    valueString = value.toString()
    dividedNumber = valueString.split('')

    for (let i = 0; i < dividedNumber.length; i++) {
        dividedNumber[i] = parseInt(dividedNumber[i], 10);
    }

    dividedNumber.forEach((current) => {
        powArray.push(Math.pow(current, dividedNumber.length));
    })

    powArray.forEach((current) => {
        sumArrayResult += current;
    })

    if (value === sumArrayResult) {
        isNarcissistic = true;
    }

    return isNarcissistic;
}
