function calcular() {

    let celsius = parseFloat(document.getElementById('Celsius').value);
    let fahrenheit = parseFloat(document.getElementById('Fahrenheit').value);
    let resultText = document.getElementById('resultadoTexto');


    if (!isNaN(celsius) && isNaN(fahrenheit)) {

        let f = (celsius * 9 / 5) + 32;
        resultText.textContent = `${celsius}°C = ${f.toFixed(2)}°F`;
    }
    else if (!isNaN(fahrenheit) && isNaN(celsius)) {

        let c = (fahrenheit - 32) * 5 / 9;
        resultText.textContent = `${fahrenheit}°F = ${c.toFixed(2)}°C`;
    }
    else {

        resultText.textContent = "Por favor, preencha apenas um dos campos (Celsius ou Fahrenheit).";
    }
}