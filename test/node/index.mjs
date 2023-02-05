const args = process.argv

const sayHelp = () => {
  console.log('Замечен флаг помощи!')
}

const check = (args) => {
  const symbol = ['+', '-', '*', '/',]
  try {
    if (args.includes('-h') || args.includes('--help')) {
      sayHelp();
      return
    }

    if (typeof (args[2]) !== typeof (0) && typeof (args[4]) === typeof (0)) {
      throw new Error('Неправильно заданы чилса');
    }

    if (!symbol.includes(args[3])) {
      throw new Error('Неправильно задана операция');
    }
  } catch (e) {
    console.log(e.message);
  }
}

const calculator = (args) => {
  switch (args[3]) {
    case '+':
      console.log(+args[2] + +args[4])
      break
    case '-':
      console.log(+args[2] - +args[4])
      break
    case '*':
      console.log(+args[2] * +args[4])
      break
    case '/':
      console.log(+args[2] / +args[4])
      break
  }
}


try {
  check(args)
  calculator(args)
} catch (e) {
  console.log(e.message)
}
