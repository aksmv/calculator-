let display = document.getElementById('display');

function appendNumber(num) {
    // Prevent multiple decimal points
    if (num === '.' && display.value.includes('.')) {
        return;
    }
    display.value += num;
}

function appendOperator(op) {
    // Prevent operator at the beginning or consecutive operators
    if (display.value === '' || display.value.endsWith('+') || 
        display.value.endsWith('-') || display.value.endsWith('*') || 
        display.value.endsWith('/')) {
        return;
    }
    display.value += op;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Evaluate the expression
        let result = eval(display.value);
        // Format the result to avoid floating point errors
        display.value = Math.round(result * 100000000) / 100000000;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}