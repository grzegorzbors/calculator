function calculate(operation) {
  try {
    if (operation.substr(operation.length - 2) === '/0') {
      return 'Div by 0!'
    } else {
      return eval(operation);
    }
  } catch (exception) {
    return 'Error!';
  }
}

// using event propagation

document.body.addEventListener('click', function (event) {
  const display = document.getElementById('display');

  // clear screen if there are error messages
  if(display.value === 'Div by 0!' || display.value === 'Error!'){
    display.value = '';
  }

  // check value of the clicked nodes
  if (event.target.value !== undefined) {
    if (event.target.value === '=') {
      display.value = calculate(display.value);
    } else if (event.target.value === '') {
      display.value = '';
    } else {
      display.value += event.target.value;
    }
  }
});