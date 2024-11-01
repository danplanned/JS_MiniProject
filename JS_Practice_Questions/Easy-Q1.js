/**
Write a function convertToFahrenheit that converts Celsius temperatures to Fahrenheit.
The formula to convert Celsius to Fahrenheit is F = C * 9/5 + 32, where C is the
temperature in Celsius and F is the temperature in Fahrenheit. 
*/

function convertToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log(fahrenheit);
}

convertToFahrenheit(0);
convertToFahrenheit(-40);
convertToFahrenheit(100);
convertToFahrenheit(37);
convertToFahrenheit(-19);
