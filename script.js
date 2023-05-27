let darkMode = false;

function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let expression = document.getElementById('result').value;
    let result;
    try {
        result = eval(expression);
        if (result === undefined || isNaN(result)) {
            result = 'Error';
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').value = result;
}

function clearInput() {
    document.getElementById('result').value = '';
}

function backspace() {
    let currentExpression = document.getElementById('result').value;
    document.getElementById('result').value = currentExpression.slice(0, -1);
}

function calculateSqrt() {
    let currentExpression = document.getElementById('result').value;
    let result;
    try {
        result = Math.sqrt(eval(currentExpression));
        if (result === undefined || isNaN(result)) {
            result = 'Error';
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').value = result;
}

function calculateFactorial() {
    let currentExpression = document.getElementById('result').value;
    let result;
    try {
        let number = eval(currentExpression);
        if (Number.isInteger(number) && number >= 0) {
            result = factorial(number);
        } else {
            result = 'Error';
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').value = result;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.add('dark');
        document.getElementById('title').classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.getElementById('title').classList.remove('dark');
    }
}
