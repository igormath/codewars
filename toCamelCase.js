toCamelCase = (str) => {
    let splittedString = [], result = '', count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '-') {
            count++;
        }
    }
    if (/^([a-z])$/.test(str.charAt(0))) {
        if (count > 0) {
            splittedString = str.split('-');
        } else {
            splittedString = str.split('_');
        }
        for (let i = 1; i < splittedString.length; i++) {
            if (splittedString[i].length > 1) {
                splittedString[i] = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(-splittedString[i].length + 1);
            } else if ((splittedString[i].length === 1) && (/^([a-z])$/.test(splittedString[i].charAt(0)))) {
                splittedString[i] = splittedString[i].charAt(0).toUpperCase();
            }
        }

    } else if (/^([A-Z])$/.test(str.charAt(0))) {
        if (count > 0) {
            splittedString = str.split('-');
        } else {
            splittedString = str.split('_');
        }
        for (let i = 1; i < splittedString.length; i++) {
            if (splittedString[i].length > 1) {
                splittedString[i] = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(-splittedString[i].length + 1);
            } else if ((splittedString[i].length === 1) && (/^([a-z])$/.test(splittedString[i].charAt(0)))) {
                splittedString[i] = splittedString[i].charAt(0).toUpperCase();
            }
        }
    }

    splittedString.forEach((value) => {
        result += value;
    })

    return result;
}
