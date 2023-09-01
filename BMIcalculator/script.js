function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultElement.textContent += ` (Category: ${category})`;
}