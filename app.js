/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  let currentInput = "";
  let operator = "";
  let firstOperand = "";
  let secondOperand = "";
  let result = "";

  // Handle click events on each button
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.textContent;

      // Check if the button clicked is a number
      if (e.target.classList.contains("number")) {
        currentInput += value;
        display.textContent = currentInput;
      }

      // Check if the button clicked is an operator
      else if (e.target.classList.contains("operator")) {
        if (value === "C") {
          // Reset everything if 'C' is clicked
          currentInput = "";
          firstOperand = "";
          secondOperand = "";
          operator = "";
          result = "";
          display.textContent = "";
        } else if (currentInput && !firstOperand) {
          // Set the first operand and the operator
          firstOperand = currentInput;
          operator = value;
          currentInput = "";
        }
      }

      // Handle the equals button
      else if (e.target.classList.contains("equals")) {
        if (currentInput && operator) {
          // Set the second operand and perform the calculation
          secondOperand = currentInput;
          result = calculate(firstOperand, secondOperand, operator);
          display.textContent = result;
          // Reset values for the next operation
          firstOperand = result;
          currentInput = "";
          operator = "";
        }
      }
    });
  });

  // Function to perform the calculation based on the operator
  function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return "";
    }
  }
});
