import { describe, it, expect } from 'vitest';
import { ArithmeticableCollection } from '../src/arithmeticable';
import { ComplexNumber } from '../src/complexNumber';

describe('ComplexNumber', () => {
    it('should add two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const result = complex1.add(complex2);

        expect(result.real).toBe(4);
        expect(result.imaginary).toBe(6);

        const result2 = result.add(complex1);

        expect(result2.real).toBe(5);
        expect(result2.imaginary).toBe(8);
    });

    it('should subtract two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const complex3 = new ComplexNumber(7, 4);

        const result = complex1.substract(complex2);

        expect(result.real).toBe(-2);
        expect(result.imaginary).toBe(-2);

        const result2 = result.substract(complex3);

        expect(result2.real).toBe(-9);
        expect(result2.imaginary).toBe(-6);
    });

    it('should multiply two complex numbers correctly', () => {
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const complex3 = new ComplexNumber(4, 2);
        const complex4 = new ComplexNumber(3, 7);

        const result = complex1.multiply(complex2);
        const result2 = complex3.multiply(complex4);

        expect(result.real).toBe(-5);
        expect(result.imaginary).toBe(10);
        expect(result2.real).toBe(-2);
        expect(result2.imaginary).toBe(34);

        const resultmuerte = result.multiply(result2);

        expect(resultmuerte.real).toBe(-330);
        expect(resultmuerte.imaginary).toBe(-190);
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

        expect(complexCollection.getNumberOfArithmeticables()).toBe(2);
    });

    it('should return the correct number of items in the collection', () => {
        const complexCollection = new ArithmeticableCollection<ComplexNumber>();
        const complex1 = new ComplexNumber(1, 2);
        const complex2 = new ComplexNumber(3, 4);
        const complex3 = new ComplexNumber(5, 4);
        const complex4 = new ComplexNumber(5, 6);
        const complex5 = new ComplexNumber(7, 7);

        complexCollection.addArithmeticable(complex1);
        complexCollection.addArithmeticable(complex2);
        complexCollection.addArithmeticable(complex3);
        complexCollection.addArithmeticable(complex4);

        expect(complexCollection.getArithmeticable(2)?.toString()).toBe('5 + 4i');
        expect(complexCollection.getArithmeticable(3)?.toString()).toBe('5 + 6i');
        expect(complexCollection.getArithmeticable(4)?.toString()).toBe(undefined);

        expect(complexCollection.getNumberOfArithmeticables()).toBe(4);
    });
});