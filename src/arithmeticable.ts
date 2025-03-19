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
