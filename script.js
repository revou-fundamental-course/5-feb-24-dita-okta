function convertTemperature() {
    let temperature = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("inputUnit").value;
    let result;
    
    switch(unit) {
      case "celcius":
        result = `${temperature}°C sama dengan ${celciusToFahrenheit(temperature)}°F dan ${celciusToKelvin(temperature)} K`;
        break;
      case "fahrenheit":
        result = `${temperature}°F sama dengan ${fahrenheitToCelcius(temperature)}°C dan ${fahrenheitToKelvin(temperature)} K`;
        break;
      case "kelvin":
        result = `${temperature} K sama dengan ${kelvinToCelcius(temperature)}°C dan ${kelvinToFahrenheit(temperature)}°F`;
        break;
      default:
        result = "Unit suhu tidak valid";
    }
    
    document.getElementById("result").textContent = result;
  }
  
  function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function celciusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  function kelvinToCelcius(kelvin) {
    return kelvin - 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  