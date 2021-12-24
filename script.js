var g_operation = "operation", number1 = 0.0, number2 = 0.0;

function clearDigits() {
  document.getElementById("textField").value = ""
}

function digitPressed(value) {
  document.getElementById("textField").value = document.getElementById("textField").value + value
}

function calculate() {
  number2 = parseFloat(document.getElementById("textField").value)
  if (g_operation == "+") {
    var result = number1 + number2
  }
  else if (g_operation == "-") {
    var result = number1 - number2;
  }
  else if (g_operation == "/") {
    var result = number1 / number2;
  }
  else { result = number1 * number2; }
  document.getElementById("textField").value = result
}

function signPressed(operation) {
  if (document.getElementById("textField").value != "") {
  number1 = parseFloat(document.getElementById("textField").value)
  g_operation = operation
  clearDigits()
  }
}
