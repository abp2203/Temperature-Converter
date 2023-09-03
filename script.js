function convertTemp() {
    var temperatureInput = document.getElementById("temperature");
    var conversionTypeRadios = document.getElementsByName("conversionType");
    var result = document.getElementById("result");
    var temperature = parseFloat(temperatureInput.value);
    
    var selectedRadio = Array.from(conversionTypeRadios).find(radio => radio.checked);

    if (!isNaN(temperature)) {
        if (selectedRadio.value === "celsiustofahrenheit") {
            var fahrenheit = (temperature * 9/5) + 32;
            result.textContent = temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F.";
        } else if (selectedRadio.value === "fahrenheittocelsius") {
            var celsius = (temperature - 32) * 5/9;
            result.textContent = temperature + "°F is equal to " + celsius.toFixed(2) + "°C.";
        }
    } else {
        result.textContent = "Please enter a valid parameter.";
    }
}
