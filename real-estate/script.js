document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.querySelector('#price-range');
  const rangeValue = document.querySelector('#range-value');

  //Initalize the display element with the current range value.
  rangeValue.textContent = rangeInput.value;

  // Add an event listener to update the display element when the range value changes

  rangeInput.addEventListener('input', function () {
    rangeValue.textContent = rangeInput.value;
  });
});
