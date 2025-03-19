import { RationalNumber } from "../src/rationalNumber.js";
import { ComplexNumber } from "../src/complexNumber.js";
import { RationalToComplexAdapter } from "../src/adapter.js";
import { describe, it, expect } from "vitest";

describe('RationalToComplexAdapter', () => {
  it('should adapt a RationalNumber to a ComplexNumber', () => {
    const rational = new RationalNumber(3, 4);
    const adapter = new RationalToComplexAdapter(rational);
    expect(adapter.real).toBe(0.75); // 3/4
    expect(adapter.imaginary).toBe(0); // Parte imaginaria es 0
  });

  it('should retrieve the original RationalNumber from the adapter', () => {
    const rational = new RationalNumber(5, 6);
    const adapter = new RationalToComplexAdapter(rational);
    const originalRational = adapter.getRational();
    expect(originalRational.numerator).toBe(5);
    expect(originalRational.denominator).toBe(6);
  });

  it('should add a RationalNumber (via adapter) and a ComplexNumber', () => {
    const rational = new RationalNumber(1, 2); // 1/2
    const adapter = new RationalToComplexAdapter(rational);
    const complex = new ComplexNumber(1, 1); // 1 + i
    const result = adapter.add(complex);
    expect(result.real).toBe(1.5); // 1/2 + 1
    expect(result.imaginary).toBe(1); // Parte imaginaria permanece
  });

  it('should subtract a ComplexNumber from a RationalNumber (via adapter)', () => {
    const rational = new RationalNumber(3, 4); // 3/4
    const adapter = new RationalToComplexAdapter(rational);
    const complex = new ComplexNumber(1, 1); // 1 + i
    const result = adapter.substract(complex);
    expect(result.real).toBe(-0.25); // 3/4 - 1
    expect(result.imaginary).toBe(-1); // Parte imaginaria permanece
  });

  it('should multiply a RationalNumber (via adapter) and a ComplexNumber', () => {
    const rational = new RationalNumber(2, 3); // 2/3
    const adapter = new RationalToComplexAdapter(rational);
    const complex = new ComplexNumber(3, 4); // 3 + 4i
    const result = adapter.multiply(complex);
    expect(result.real).toBe(2); // (2/3 * 3)
    expect(result.imaginary).toBe(8 / 3); // (2/3 * 4)
  });

  it('should divide a RationalNumber (via adapter) by a ComplexNumber', () => {
    const rational = new RationalNumber(3, 4); // 3/4
    const adapter = new RationalToComplexAdapter(rational);
    const complex = new ComplexNumber(1, 1); // 1 + i
    const result = adapter.divide(complex);
    const denominator = 1 * 1 + 1 * 1; // 1^2 + 1^2 = 2
    expect(result.real).toBeCloseTo(0.375); // (3/4 * 1 + 0 * 1) / 2
    expect(result.imaginary).toBeCloseTo(-0.375); // (0 * 1 - 3/4 * 1) / 2
  });
});