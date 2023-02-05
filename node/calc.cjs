const tryCatch = require('./tryCatch.cjs');
const calc = require('./core.cjs');

const program = () => {
  if (process.argv.length > 5) {
    throw new Error('Сличшком много аргументов')
  }

  const [_, __, n1, operation, n2] = process.argv;

  const help = "Программа-калькулятор, введите команду в формате num1 + num2"

  if (n1 === '-h' || n1 === '--help') {
    console.log(help)
    return {};
  }

  const num1 = +n1;
  const num2 = +n2;

  if (isNaN(num1) && isNaN(num2)) {
    throw new Error('Цифры введены не коректно')
  }

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      throw new Error('Некоректный оператор');
  }

  return {
    number1: num1,
    number2: num2,
    operation,
    result,
  }
}

// const tryCatchDecorator = (callback) => (...arg) => {
//   try {
//     return callback();
//   } catch (e) {
//     console.log(e.message);
//     return {
//       message: e.message
//     }
//   }
// }

// const decorProgram = tryCatchDecorator(program)
const  decorProgram = tryCatch.tryCatchDecorator(program)

console.log(decorProgram())