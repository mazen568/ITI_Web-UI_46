const { MathUtils } = require("../index.js");

describe("MathUtils", () => {
  let math;

  beforeEach(() => {
    math = new MathUtils();
  });

  describe("sum", () => {
    it("should throw an error if the argument not exactly two numbers", () => {
      expect(() => math.sum(2, 3, 4)).toThrowError(
        "Function requires exactly two arguments",
      );
    });

    it("should throw an error if the argument exactly one number", () => {
      expect(() => math.sum(2)).toThrowError(
        "Function requires exactly two arguments",
      );
    });

    it("should throw an error if the first argument is not a number", () => {
      expect(() => math.sum("a", 2)).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should throw an error if the second argument is not a number", () => {
      expect(() => math.sum(2, "b")).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should return the sum of two numbers", () => {
      expect(math.sum(2, 3)).toBe(5);
    });

    it("should return the sum of two negative numbers", () => {
      expect(math.sum(-2, -3)).toBe(-5);
    });

    it("should return the sum of a positive and a negative number", () => {
      expect(math.sum(2, -3)).toBe(-1);
    });

    it("should return the sum of two decimal numbers", () => {
      expect(math.sum(2.5, 3.5)).toBe(6);
    });
  });

  describe("substract", () => {
    it("should throw an error if the first argument is not a number", () => {
      expect(() => math.substract("a", 2)).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should throw an error if the second argument is not a number", () => {
      expect(() => math.substract(2, "b")).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should return the difference of two numbers", () => {
      expect(math.substract(5, 3)).toBe(2);
    });

    it("should return the difference of two negative numbers", () => {
      expect(math.substract(-5, -3)).toBe(-2);
    });

    it("should return the difference of a positive and a negative number", () => {
      expect(math.substract(5, -3)).toBe(8);
    });

    it("should return the difference of two decimal numbers", () => {
      expect(math.substract(5.5, 3.5)).toBe(2);
    });
  });

  describe("multiply", () => {
    it("should throw an error if the first argument is not a number", () => {
      expect(() => math.multiply("a", 2)).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should throw an error if the second argument is not a number", () => {
      expect(() => math.multiply(2, "b")).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should return the product of two numbers", () => {
      expect(math.multiply(2, 3)).toBe(6);
    });

    it("should return the product of two negative numbers", () => {
      expect(math.multiply(-2, -3)).toBe(6);
    });

    it("should return the product of a positive and a negative number", () => {
      expect(math.multiply(2, -3)).toBe(-6);
    });

    it("should return the product of two decimal numbers", () => {
      expect(math.multiply(2.5, 3.5)).toBe(8.75);
    });

    it("should return zero if one of the numbers is zero", () => {
      expect(math.multiply(0, 3)).toBe(0);
      expect(math.multiply(2, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should throw an error if the first argument is not a number", () => {
      expect(() => math.divide("a", 2)).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should throw an error if the second argument is not a number", () => {
      expect(() => math.divide(2, "b")).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should return the quotient of two numbers", () => {
      expect(math.divide(6, 3)).toBe(2);
    });

    it("should return the quotient of two negative numbers", () => {
      expect(math.divide(-6, -3)).toBe(2);
    });

    it("should return the quotient of a positive and a negative number", () => {
      expect(math.divide(6, -3)).toBe(-2);
    });

    it("should return the quotient of two decimal numbers", () => {
      expect(math.divide(6.5, 3.5)).toBe(1.8571428571428572);
    });

    it("should return infinity if one of the numbers is zero", () => {
      expect(math.divide(0, 3)).toBe(0);
      expect(math.divide(2, 0)).toBe(Infinity);
    });
  });

  describe("average", () => {
    it("should throw an error if the first argument is not a number", () => {
      expect(() => math.average("a", 2)).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should throw an error if the second argument is not a number", () => {
      expect(() => math.average(2, "b")).toThrowError(
        "Both arguments must be numbers",
      );
    });

    it("should return the average of two numbers", () => {
      expect(math.average(5, 3)).toBe(4);
    });

    it("should return the average of two negative numbers", () => {
      expect(math.average(-5, -3)).toBe(-4);
    });

    it("should return the average of a positive and a negative number", () => {
      expect(math.average(5, -3)).toBe(1);
    });

    it("should return the average of two decimal numbers", () => {
      expect(math.average(5.5, 3.5)).toBe(4.5);
    });
  });

  describe("factorial", () => {
    it("should throw an error if the argument not exactly one number", () => {
      expect(() => math.factorial(2, 3)).toThrowError(
        "Function requires exactly one argument",
      );
    });
    
    it("should throw an error if the argument is not a number", () => {
      expect(() => math.factorial("a")).toThrowError(
        "Argument must be a number",
      );
    });

    it("should return the factorial of a positive number", () => {
      expect(math.factorial(5)).toBe(120);
    });

    it("should return the factorial of a negative number", () => {
      expect(() => math.factorial(-5)).toThrowError(
        "There is no factorial for negative numbers",
      );
    });

    it("should return the factorial of zero", () => {
      expect(math.factorial(0)).toBe(1);
    });

    it("should return the factorial of one", () => {
      expect(math.factorial(1)).toBe(1);
    });
  });

  describe("checkPositivity", () => {
    it("should return false if the argument is not a number", () => {
      expect(math.checkPositivity("a")).toBeFalse();
    });

    it("should return false if the number is negative", () => {
      expect(math.checkPositivity(-5)).toBeFalse();
    });

    it("should return true if the number is positive", () => {
      expect(math.checkPositivity(5)).toBeTrue();
    });

    it("should return true if the number is zero", () => {
      expect(math.checkPositivity(0)).toBeTrue();
    });
  });
});
