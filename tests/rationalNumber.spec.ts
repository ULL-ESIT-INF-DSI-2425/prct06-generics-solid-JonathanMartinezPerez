import { describe, it, expect } from "vitest";
import { RationalNumber } from "../src/rationalNumber";

describe("RationalNumber", () => {
  it("should create a RationalNumber instance", () => {
    const rational = new RationalNumber(1, 2);
    expect(rational.numerator).toBe(1);
    expect(rational.denominator).toBe(2);
  });

  it("should throw an error if the denominator is zero", () => {
    expect(() => new RationalNumber(1, 0)).toThrow("El denominador no puede ser cero.");
  });

  it("should add two RationalNumbers correctly", () => {
    const rational1 = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(1, 3);
    const result = rational1.add(rational2);
    expect(result.numerator).toBe(5);
    expect(result.denominator).toBe(6);
  });

  it("should subtract two RationalNumbers correctly", () => {
    const rational1 = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(1, 3);
    const result = rational1.substract(rational2);
    expect(result.numerator).toBe(1);
    expect(result.denominator).toBe(6);
  });

  it("should multiply two RationalNumbers correctly", () => {
    const rational1 = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(2, 3);
    const result = rational1.multiply(rational2);
    expect(result.numerator).toBe(2);
    expect(result.denominator).toBe(6);
  });

  it("should divide two RationalNumbers correctly", () => {
    const rational1 = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(2, 3);
    const result = rational1.divide(rational2);
    expect(result.numerator).toBe(3);
    expect(result.denominator).toBe(4);
  });

  it("should represent a RationalNumber as a string", () => {
    const rational = new RationalNumber(3, 4);
    expect(rational.toString()).toBe("3/4");
  });
});