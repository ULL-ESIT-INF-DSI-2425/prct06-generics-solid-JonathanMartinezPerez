import { ArithmeticableCollection, Arithmeticable } from "./arithmeticable.js";
/**
 * Clase que representa un número complejo.
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
    /**
     * Constructor para crear un imaginario
     * @param real 
     * @param imaginary 
     */
    constructor(public real: number, public imaginary: number) {}

    /**
     * Método para sumar dos complejos
     */
    add(value: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real + value.real, this.imaginary + value.imaginary);
    }

    /**
     * Método para restar dos complejos
     */
    substract(value: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real - value.real, this.imaginary - value.imaginary);
    }

    /**
     * Método para multiplicar dos complejos
     */
    multiply(value: ComplexNumber): ComplexNumber {
        return new ComplexNumber(
            this.real * value.real - this.imaginary * value.imaginary,
            this.real * value.imaginary + this.imaginary * value.real
        );
    }

    /**
     * Método para dividir dos complejos
     */
    divide(value: ComplexNumber): ComplexNumber {
        const denominator = value.real * value.real + value.imaginary * value.imaginary;
        return new ComplexNumber(
            (this.real * value.real + this.imaginary * value.imaginary) / denominator,
            (this.imaginary * value.real - this.real * value.imaginary) / denominator
        );
    }

    /**
     * Método para representar un complejo en un string
     * @returns string con el número
     */
    toString(): string {
        return `${this.real} + ${this.imaginary}i`;
    }
}

