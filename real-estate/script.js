document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.querySelector('#price-range');
  const rangeValue = document.querySelector('#range-value');
  
  //Initalize the display element with the current range value. 
  rangeValue.textContent = rangeInput.value;

});
