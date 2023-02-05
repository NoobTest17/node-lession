const calc = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case '+':
      return num1 + num2
      break
    case '-':
      return num1 - num2
      break
    case '*':
      return num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      throw new Error('Некоректный оператор');
  }
}

module.exports = {
  calc
}