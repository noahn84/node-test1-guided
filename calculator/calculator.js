function add(...values) {
  // take pairs of values out of the array and add them together until the end is reached. set default value to 0
  return values.reduce((a, b) => a + b, 0)
}

function subtract(...values) {
  return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

function multiply(...values) {
  return values.reduce((a, b) => a * b, 1)
}

function divide(...values) {
  if (values.slice(1).indexOf(0) > -1) {
    throw new Error("Cannot devide by zero")
  }
  return values.slice(1).reduce((a, b) => a / b, values[0] || 0)
}

function parse(data) {
  const result = {}

  if (Array.isArray(data.add)) {
    // using the spread operator here ('...') takes the array value and spreads it out as parameters. Like calling add(data.add[0], data.add[1], data.add[2])
    result.add = add(...data.add)
  }

  if (Array.isArray(data.subtract)) {
    result.subtract = subtract(...data.subtract)
  }

  if (Array.isArray(data.multiply)) {
    result.multiply = multiply(...data.multiply)
  }

  if (Array.isArray(data.divide)) {
    result.divide = divide(...data.divide)
  }

  return result
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  parse,
}