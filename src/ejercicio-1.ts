/**
 * @template T
 * Interfaz genérica que define las propiedades y métodos para una colección de emisiones.
 */
export interface Streamable<T> {
  /**
   * Añade un nuevo elemento a la colección.
   * @param item El elemento a añadir.
   */
  add(item: T): void;

  /**
   * Busca elementos en la colección por nombre.
   * @param name El nombre a buscar.
   * @returns Una lista de elementos que coinciden con el nombre.
   */
  searchByName(name: string): T[];

  /**
   * Busca elementos en la colección por año.
   * @param year El año a buscar.
   * @returns Una lista de elementos que coinciden con el año.
   */
  searchByYear(year: number): T[];
}

/**
 * @template T
 * @abstract
 * Clase abstracta que implementa la interfaz Streamable.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[] = [];

  /**
   * @inheritdoc
   */
  add(item: T): void {
    this.items.push(item);
  }

  /**
   * @inheritdoc
   */
  abstract searchByName(name: string): T[];

  /**
   * @inheritdoc
   */
  abstract searchByYear(year: number): T[];
}

/**
 * Clase que define las propiedades de una serie.
 */
export class Series {
  constructor(public name: string, public year: number) {}
}

/**
 * Clase que modela una colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  searchByName(name: string): Series[] {
    return this.items.filter(series => series.name.includes(name));
  }

  searchByYear(year: number): Series[] {
    return this.items.filter(series => series.year === year);
  }
}

/**
 * Clase que define las propiedades de una película.
 */
export class Movie {
  constructor(public name: string, public year: number) {}
}

/**
 * Clase que modela una colección de películas.
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
  searchByName(name: string): Movie[] {
    return this.items.filter(movie => movie.name.includes(name));
  }

  searchByYear(year: number): Movie[] {
    return this.items.filter(movie => movie.year === year);
  }
}

/**
 * Clase que define las propiedades de un documental.
 */
export class Documentary {
  constructor(public name: string, public year: number) {}
}

/**
 * Clase que modela una colección de documentales.
 */
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  searchByName(name: string): Documentary[] {
    return this.items.filter(documentary => documentary.name.includes(name));
  }

  searchByYear(year: number): Documentary[] {
    return this.items.filter(documentary => documentary.year === year);
  }
}