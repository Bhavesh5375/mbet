// Append number or operator to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Calculate the result
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);  // Use eval to compute the expression
    } catch (e) {
      display.value = 'Error';  // Display error if the expression is invalid
    }
  }
  