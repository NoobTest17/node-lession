const tryCatchDecorator = (callback) => (...arg) => {
  try {
    return callback();
  } catch (e) {
    console.log(e.message);
    return {
      message: e.message
    }
  }
}

module.exports = {
  tryCatchDecorator
}