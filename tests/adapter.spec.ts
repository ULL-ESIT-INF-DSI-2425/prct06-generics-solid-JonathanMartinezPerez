import { RationalNumber } from "../src/rationalNumber.js";
import { describe, it, expect } from "vitest";

describe('RationalNumber', () => {
  it('should create a RationalNumber with valid numerator and denominator', () => {
    const rational = new RationalNumber(3, 4);
    expect(rational.numerator).toBe(3);
    expect(rational.denominator).toBe(4);
  });

  it('should throw an error when the denominator is zero', () => {
    expect(() => new RationalNumber(1, 0)).toThrow("El denominador no puede ser cero.");
  });

  it('should add two RationalNumbers correctly', () => {
    const rational1 = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(1, 3);
    const result = rational1.add(rational2);
    expect(result.numerator).toBe(5);
    expect(result.denominator).toBe(6);
  });

  it('should subtract two RationalNumbers correctly', () => {
    const rational1 = new RationalNumber(3, 4);
    const rational2 = new RationalNumber(1, 4);
    const result = rational1.substract(rational2);
    expect(result.numerator).toBe(1);
    expect(result.denominator).toBe(2);
  });

  it('should multiply two RationalNumbers correctly', () => {
    const rational1 = new RationalNumber(2, 3);
    const rational2 = new RationalNumber(3, 4);
    const result = rational1.multiply(rational2);
    expect(result.numerator).toBe(6);
    expect(result.denominator).toBe(12);
  });

  it('should divide two RationalNumbers correctly', () => {
    const rational1 = new RationalNumber(3, 4);
    const rational2 = new RationalNumber(2, 5);
    const result = rational1.divide(rational2);
    expect(result.numerator).toBe(15);
    expect(result.denominator).toBe(8);
  });

  it('should represent a RationalNumber as a string', () => {
    const rational = new RationalNumber(5, 6);
    expect(rational.toString()).toBe("5/6");
  });
});
