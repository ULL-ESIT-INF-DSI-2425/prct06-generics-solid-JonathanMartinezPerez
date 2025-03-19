import { RationalNumber } from "./rationalNumber.js";
import { ComplexNumber } from "./complexNumber.js";

/**
 * Adaptador que permite tratar un número racional como un número complejo.
 */
export class RationalToComplexAdapter extends ComplexNumber {
    constructor(private rational: RationalNumber) {
        // Un número racional se representa como un complejo con parte imaginaria 0.
        super(rational.numerator / rational.denominator, 0);
    }

    /**
     * Método para obtener el número racional original.
     * @returns número racional original
     */
    getRational(): RationalNumber {
        return this.rational;
    }
}