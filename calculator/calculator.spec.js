const calculator = require("./calculator")

describe("calculator unit tests", () => {
  it("adds", () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.add(3, 2)).toBe(5)
    expect(calculator.add(1, 0)).toBe(1)
    expect(calculator.add(-1, 1)).toBe(0)
    expect(calculator.add(1)).toBe(1)
    expect(calculator.add()).toBe(0)
    // refactoring to support more parameters
    expect(calculator.add(2, 2, 2)).toBe(6)
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
  })

  it("subtracts", () => {
    expect(calculator.subtract(3, 2)).toBe(1)
    expect(calculator.subtract(2, 2)).toBe(0)
    expect(calculator.subtract(1, 2)).toBe(-1)
    expect(calculator.subtract(1)).toBe(1)
    expect(calculator.subtract()).toBe(0)
  })

  it("multiplies", () => {
    expect(calculator.multiply(2, 2)).toBe(4)
    expect(calculator.multiply(3, 2)).toBe(6)
    expect(calculator.multiply(1, 0)).toBe(0)
    expect(calculator.multiply(-1, 1)).toBe(-1)
    expect(calculator.multiply(1)).toBe(1)
    expect(calculator.multiply()).toBe(1)
  })

  it("divides", () => {
    expect(calculator.divide(2, 2)).toBe(1)
    expect(calculator.divide(3, 2)).toBe(1.5)
    expect(calculator.divide(-1, 1)).toBe(-1)
    expect(calculator.divide(1)).toBe(1)
    expect(calculator.divide()).toBe(0)
    expect(() => calculator.divide(1, 0)).toThrow()
  })

  it("parses", () => {
    expect(calculator.parse({
      add: [1, 2, 3],
      subtract: [3, 2, 1],
      multiply: [1, 2, 3],
      divide: [2, 2, 2],
    // we can no longer use '.toBe()' since we're doing a deep equality check with an object rather than a primitive value (number, string, etc...)
    })).toEqual({
      add: 6,
      subtract: 0,
      multiply: 6,
      divide: 0.5,
    })
  })
})

