/**
 * Interfaz que define arithmeticable con sus operaciones.
 */
export interface Arithmeticable<T> {
    add(value: T): T;
    substract(value: T): T;
    multiply(value: T): T;
    divide(value: T): T;
}

/**
 * Clase generica que contiene una coleccion de Arithmeticables.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    /**
     * Attributo que contiene los items de la coleccion.
     */
    private items: T[] = [];
    
    /**
     * Metodo que agrega un item a la coleccion.
     * @param item 
     */
    addArithmeticable(item: T): void {
        this.items.push(item);
    }
    /**
     * Metodo que obtiene un item de la coleccion.
     * @param index
     */
    getArithmeticable(index: number): T | undefined {
        return this.items[index];
    }

    /**
     * Metodo que devuelve el numero de items de la coleccion
     * @returns items.length
     */
    getNumberOfArithmeticables(): number {
        return this.items.length;
    }
}

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

// Demostración del funcionamiento
const complexCollection = new ArithmeticableCollection<ComplexNumber>();

const complex1 = new ComplexNumber(1, 2);
const complex2 = new ComplexNumber(3, 4);

complexCollection.addArithmeticable(complex1);
complexCollection.addArithmeticable(complex2);

console.log(complexCollection.getArithmeticable(0)?.toString()); // 1 + 2i
console.log(complexCollection.getArithmeticable(1)?.toString()); // 3 + 4i
console.log(complexCollection.getNumberOfArithmeticables()); // 2

const resultAdd = complex1.add(complex2);
console.log(resultAdd.toString()); // 4 + 6i

const resultSubstract = complex1.substract(complex2);
console.log(resultSubstract.toString()); // -2 + -2i

const resultMultiply = complex1.multiply(complex2);
console.log(resultMultiply.toString()); // -5 + 10i

const resultDivide = complex1.divide(complex2);
console.log(resultDivide.toString()); // 0.44 + 0.08i