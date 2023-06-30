function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    if (num1 >= num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  } else if (operator == "/") {
    if (num1 >= num2) {
      return num1 / num2;
    } else {
      return num2 / num1;
    }
  } else if (operator == "*") {
    return num1 * num2;
  } else {
    return "Invalid Operator";
  }
}

console.log(calculator(10, 2, "/"));
