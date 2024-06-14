const calculate = () => {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;
    
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
        case 'percentage':
            result = (number1 / 100) * number2;
            break;
        case 'sqrt':
            result = Math.sqrt(number1);
            break;
        case 'power':
            result = Math.pow(number1, number2);
            break;
        default:
            result = 'Erreur';
    }
    
    document.getElementById('result').innerText = `Résultat : ${result}`;
}
