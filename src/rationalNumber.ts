import { ComplexNumber } from "./complexNumber.js"
import { ArithmeticableCollection, Arithmeticable } from "./arithmeticable.js"

/**
 * Clase que representa un número racional.
 */
export class RationalNumber implements Arithmeticable<RationalNumber> {
    constructor(public numerator: number, public denominator: number) {
        if (denominator === 0) {
            throw new Error("El denominador no puede ser cero.");
        }
    }

    /**
     * Método para sumar dos números racionales.
     */
    add(value: RationalNumber): RationalNumber {
        const numerator = this.numerator * value.denominator + value.numerator * this.denominator;
        const denominator = this.denominator * value.denominator;
        return new RationalNumber(numerator, denominator);
    }

    /**
     * Método para restar dos números racionales.
     */
    substract(value: RationalNumber): RationalNumber {
        const numerator = this.numerator * value.denominator - value.numerator * this.denominator;
        const denominator = this.denominator * value.denominator;
        return new RationalNumber(numerator, denominator);
    }

    /**
     * Método para multiplicar dos números racionales.
     */
    multiply(value: RationalNumber): RationalNumber {
        return new RationalNumber(this.numerator * value.numerator, this.denominator * value.denominator);
    }

    /**
     * Método para dividir dos números racionales.
     */
    divide(value: RationalNumber): RationalNumber {
        return new RationalNumber(this.numerator * value.denominator, this.denominator * value.numerator);
    }

    /**
     * Método para representar un número racional como string.
     */
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}