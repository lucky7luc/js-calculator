const currentCalc = document.getElementById('current-calculation-display');
const resultDisplay = document.getElementById('result-display');

// to display current calculation
const appendValue = (value) => {
    currentCalc.innerText += value;
};

const calculate = () => {
    try {
        let expression = currentCalc.innerText.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        let result = eval(expression);
        resultDisplay.innerText = result;
    } catch (error) {
        resultDisplay.innerText = "Error";
    }
};

const percentCalc = () => {
    appendValue('%');
};

const deleteLast = () => {
    if (currentCalc.innerText.endsWith(' ')) {
        currentCalc.innerText = currentCalc.innerText.slice(0, -3);
    } else {
        currentCalc.innerText = currentCalc.innerText.slice(0, -1);
    }
};

const clearAll = () => {
    currentCalc.innerText = "";
    resultDisplay.innerText = "0";
};
