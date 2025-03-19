import { ComplexNumber } from "../src/complexNumber.js"
import { ArithmeticableCollection, Arithmeticable } from "../src/arithmeticable.js"
import { RationalNumber } from "../src/rationalNumber.js"
import { RationalToComplexAdapter } from "../src/adapter.js"
import { describe, it, expect } from "vitest"

describe('Adapter', () => {
  it('should adapt a RationalNumber to a ComplexNumber', () => {
    const rational = new RationalNumber(1, 2);
    const adapter = new RationalToComplexAdapter(rational);
    expect(adapter.real).toBe(0.5);
    expect(adapter.imaginary).toBe(0);
    expect(adapter.getRational()).toBe(rational);
  });

  it('should adapt a RationalNumber to a ComplexNumber', () => {
    const rational = new RationalNumber(1, 2);
    const adapter = new RationalToComplexAdapter(rational);
    expect(adapter.real).toBe(0.5);
    expect(adapter.imaginary).toBe(0);
    expect(adapter.getRational()).toBe(rational);
  });

  it('should adapt a RationalNumber to a ComplexNumber', () => {
    const rational = new RationalNumber(1, 2);
    const adapter = new RationalToComplexAdapter(rational);
    expect(adapter.real).toBe(0.5);
    expect(adapter.imaginary).toBe(0);
    expect(adapter.getRational()).toBe(rational);
  });
});
