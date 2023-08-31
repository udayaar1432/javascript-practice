const exchangeRates = {
    usd: {
        eur: 0.85,
        gbp: 0.73,
    },
    eur: {
        usd: 1.18,
        gbp: 0.85,
    },
    gbp: {
        usd: 1.38,
        eur: 1.18,
    },
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        alert('Exchange rate not available for the selected currencies.');
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${amount.toFixed(2)} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
}