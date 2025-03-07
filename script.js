let display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Infinity' || display.value === 'Error') {
        display.value = '';
    }
    if (isValidInput(value)) {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        if (!isFinite(result)) {
            display.value = 'Infinity';
        } else {
            display.value = result;
        }
    } catch {
        display.value = 'Error';
    }
}

function isValidInput(value) {
    let lastChar = display.value.slice(-1);
    let operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        return false;
    }
    if (value === '.' && display.value.includes('.')) {
        return false;
    }
    return true;
}
