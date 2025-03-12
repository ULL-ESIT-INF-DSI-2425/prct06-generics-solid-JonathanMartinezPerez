import { describe, it, expect } from 'vitest';
import { ComplexNumber, ArithmeticableCollection } from '../src/ejercicioclase-1';

describe('ComplexNumber', () => {
    it('should add two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const result = complex1.add(complex2);
        expect(result.real).toBe(4);
        expect(result.imaginary).toBe(6);
    });

    it('should subtract two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const result = complex1.substract(complex2);
        expect(result.real).toBe(-2);
        expect(result.imaginary).toBe(-2);
    });

    it('should multiply two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const result = complex1.multiply(complex2);
        expect(result.real).toBe(-5);
        expect(result.imaginary).toBe(10);
    });

    it('should divide two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const result = complex1.divide(complex2);
        expect(result.real).toBeCloseTo(0.44, 2);
        expect(result.imaginary).toBeCloseTo(0.08, 2);
    });

    it('should return the correct string representation', () => {
        const complex = new ComplexNumber(1, 2);
        expect(complex.toString()).toBe('1 + 2i');
    });
});

describe('ArithmeticableCollection', () => {
    it('should add and retrieve complex numbers correctly', () => {
        const complexCollection = new ArithmeticableCollection<ComplexNumber>();
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);

        complexCollection.addArithmeticable(complex1);
        complexCollection.addArithmeticable(complex2);

        expect(complexCollection.getArithmeticable(0)?.toString()).toBe('1 + 2i');
        expect(complexCollection.getArithmeticable(1)?.toString()).toBe('3 + 4i');
    });

    it('should return the correct number of items in the collection', () => {
        const complexCollection = new ArithmeticableCollection<ComplexNumber>();
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);

        complexCollection.addArithmeticable(complex1);
        complexCollection.addArithmeticable(complex2);

        expect(complexCollection.getNumberOfArithmeticables()).toBe(2);
    });
});