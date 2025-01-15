document.getElementById('convertBtn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('resultDisplay');

    if (isNaN(Number(temperatureInput))) {
        resultDisplay.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;

    if (unit === 'Celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        resultDisplay.textContent = `${convertedTemperature.toFixed(2)} °F`;
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        resultDisplay.textContent = `${convertedTemperature.toFixed(2)} °C`;
    }
});
