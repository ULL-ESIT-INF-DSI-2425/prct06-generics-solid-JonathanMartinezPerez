/** 
 * Se estaba violando el principio de sustitución de Liskov (LSP) del SOLID.
 * Este principio establece que los objetos de una clase derivada deben ser sustituibles 
 * por objetos de la clase base sin alterar el comportamiento esperado del programa.
 */

/**
 * @interface
 * Interfaz que define el comportamiento de volar.
 */
export interface Flyable {
  /**
   * Método para volar.
   */
  fly(): void;
}

/**
 * Clase base para todas las aves.
 */
export class Bird {
  /**
   * Método para describir el comportamiento de la ave.
   */
  describe(): void {
    console.log("I am a bird.");
  }
}

/**
 * Clase que modela un gorrión.
 * @extends Bird
 * @implements Flyable
 */
export class Sparrow extends Bird implements Flyable {
  /**
   * @inheritdoc
   */
  fly(): void {
    console.log("Flying...");
  }
}

/**
 * Clase que modela un pingüino.
 * @extends Bird
 */
export class Penguin extends Bird {
  /**
   * Método para describir el comportamiento del pingüino.
   */
  describe(): void {
    console.log("I am a penguin and I cannot fly.");
  }
}

// Client code
const sparrow = new Sparrow();
sparrow.describe();
sparrow.fly();

const penguin = new Penguin();
penguin.describe();