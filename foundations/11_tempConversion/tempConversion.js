const convertToCelsius = function(farenheit) {
  let toCelcius = (farenheit - 32) * (5/9);
  if (toCelcius == 0) {
    return 0;
  } else {
  let roundedCelcius = toCelcius.toFixed(1);
  return Number(roundedCelcius);}
};

const convertToFahrenheit = function(celcius) {
  let toFarenheit = (celcius * (9/5)) + 32;
  if (toFarenheit == 0) {
    return 0;
  } else {
  let roundedFarenheit = toFarenheit.toFixed(1);
  return Number(roundedFarenheit);}
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
