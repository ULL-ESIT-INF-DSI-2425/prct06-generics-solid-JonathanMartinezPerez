import { ComplexNumber } from "./complexNumber.js"
import { ArithmeticableCollection, Arithmeticable } from "./arithmeticable.js"

/**
 * Clase que representa un número racional.
 * Implementa la interfaz Arithmeticable para poder realizar operaciones aritméticas.
 */
export class RationalNumber implements Arithmeticable<RationalNumber> {
    constructor(public numerator: number, public denominator: number) {
        if (denominator === 0) {
            throw new Error("El denominador no puede ser cero.");
        }
    }

    /**
     * Método para sumar dos números racionales.
     * @param value número racional a sumar
     * @returns resultado de la suma
     */
    add(value: RationalNumber): RationalNumber {
        const numerator = this.numerator * value.denominator + value.numerator * this.denominator;
        const denominator = this.denominator * value.denominator;
        return new RationalNumber(numerator, denominator);
    }

    /**
     * Método para restar dos números racionales.
     * @param value número racional a restar
     * @returns resultado de la resta
     */
    substract(value: RationalNumber): RationalNumber {
        const numerator = this.numerator * value.denominator - value.numerator * this.denominator;
        const denominator = this.denominator * value.denominator;
        return new RationalNumber(numerator, denominator);
    }

    /**
     * Método para multiplicar dos números racionales.
     * @param value número racional a multiplicar
     * @returns resultado de la multiplicación
     */
    multiply(value: RationalNumber): RationalNumber {
        return new RationalNumber(this.numerator * value.numerator, this.denominator * value.denominator);
    }

    /**
     * Método para dividir dos números racionales.
     * @param value número racional a dividir
     * @returns resultado de la división
     */
    divide(value: RationalNumber): RationalNumber {
        return new RationalNumber(this.numerator * value.denominator, this.denominator * value.numerator);
    }

    /**
     * Método para representar un número racional como string.
     * @returns string con el número racional
     */
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}