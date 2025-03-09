/**
 * Interfaz para canciones
 */
export interface ISong {
  name: string;
  duration: number; // en segundos
  genres: string[];
  isSingle: boolean;
  plays: number;
}

/**
 * Clase que implementa una canción
 */
export class Song implements ISong {
  constructor(
    public name: string,
    public duration: number,
    public genres: string[],
    public isSingle: boolean,
    public plays: number
  ) {}
}

/**
 * Interfaz para álbum
 */
export interface IAlbum {
  name: string;
  year: number;
  songs: Song[];
}

/**
 * Clase que implementa un álbum y provee métodos para cálculos
 */
export class Album implements IAlbum {
  constructor(public name: string, public year: number, public songs: Song[] = []) {}

  /**
   * Calcula el número de canciones del álbum
   * @returns {number} Número de canciones
   */
  getSongCount(): number {
    return this.songs.length;
  }

  /**
   * Calcula la duración total del álbum (suma de la duración de sus canciones)
   * @returns {number} Duración total en segundos
   */
  getTotalDuration(): number {
    return this.songs.reduce((acc, song) => acc + song.duration, 0);
  }

  /**
   * Calcula el total de reproducciones del álbum (suma de las reproducciones de sus canciones)
   * @returns {number} Total de reproducciones
   */
  getTotalPlays(): number {
    return this.songs.reduce((acc, song) => acc + song.plays, 0);
  }
}

/**
 * Interfaz para un single
 */
export interface ISingle {
  name: string;
  year: number;
  song: Song;
}

/**
 * Clase que implementa un single
 */
export class Single implements ISingle {
  constructor(public name: string, public year: number, public song: Song) {}
}

/**
 * Interfaz para un artista
 */
export interface IArtist {
  name: string;
  monthlyListeners: number;
  discography: (Album | Single)[];
}

/**
 * Clase que implementa un artista
 */
export class Artist implements IArtist {
  constructor(public name: string, public monthlyListeners: number, public discography: (Album | Single)[] = []) {}
}

/**
 * Clase que representa la biblioteca musical
 */
export class MusicLibrary {
  private artists: Artist[] = [];

  /**
   * Agrega un artista a la biblioteca
   * @param {Artist} artist - El artista a agregar
   */
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * Muestra la información de la biblioteca en formato tabla
   */
  displayLibrary(): void {
    const libraryData = [];
    for (const artist of this.artists) {
      for (const item of artist.discography) {
        if (item instanceof Album) {
          libraryData.push({
            Artist: artist.name,
            'Oyentes mensuales': artist.monthlyListeners,
            Album: item.name,
            Año: item.year,
            'N° Canciones': item.getSongCount(),
            'Duración Total (s)': item.getTotalDuration(),
            'Reproducciones Totales': item.getTotalPlays()
          });
        } else if (item instanceof Single) {
          libraryData.push({
            Artist: artist.name,
            'Oyentes mensuales': artist.monthlyListeners,
            Single: item.name,
            Año: item.year,
            'Duración (s)': item.song.duration,
            'Reproducciones': item.song.plays
          });
        }
      }
    }
    console.table(libraryData);
  }

  /**
   * Búsqueda de artistas utilizando un predicado
   * @param {(artist: Artist) => boolean} predicate - Función de búsqueda
   * @returns {Artist[]} Lista de artistas que cumplen con el predicado
   */
  searchArtists(predicate: (artist: Artist) => boolean): Artist[] {
    return this.artists.filter(predicate);
  }

  /**
   * Búsqueda de álbumes utilizando un predicado
   * @param {(album: Album) => boolean} predicate - Función de búsqueda
   * @returns {Album[]} Lista de álbumes que cumplen con el predicado
   */
  searchAlbums(predicate: (album: Album) => boolean): Album[] {
    const albums: Album[] = [];
    this.artists.forEach(artist => {
      artist.discography.forEach(item => {
        if (item instanceof Album && predicate(item)) {
          albums.push(item);
        }
      });
    });
    return albums;
  }

  /**
   * Búsqueda de singles utilizando un predicado
   * @param {(single: Single) => boolean} predicate - Función de búsqueda
   * @returns {Single[]} Lista de singles que cumplen con el predicado
   */
  searchSingles(predicate: (single: Single) => boolean): Single[] {
    const singles: Single[] = [];
    this.artists.forEach(artist => {
      artist.discography.forEach(item => {
        if (item instanceof Single && predicate(item)) {
          singles.push(item);
        }
      });
    });
    return singles;
  }

  /**
   * Búsqueda de canciones utilizando un predicado
   * @param {(song: Song) => boolean} predicate - Función de búsqueda
   * @returns {Song[]} Lista de canciones que cumplen con el predicado
   */
  searchSongs(predicate: (song: Song) => boolean): Song[] {
    const songs: Song[] = [];
    this.artists.forEach(artist => {
      artist.discography.forEach(item => {
        if (item instanceof Album) {
          songs.push(...item.songs.filter(predicate));
        } else if (item instanceof Single && predicate(item.song)) {
          songs.push(item.song);
        }
      });
    });
    return songs;
  }
}

/**
 * Clase genérica para la discografía
 * @template T
 */
export class Discography<T> {
  constructor(public items: T[] = []) {}

  /**
   * Agrega un nuevo elemento a la discografía
   * @param {T} item - El elemento a agregar
   */
  add(item: T): void {
    this.items.push(item);
  }

  /**
   * Obtiene todos los elementos de la discografía
   * @returns {T[]} Lista de elementos
   */
  getAll(): T[] {
    return this.items;
  }
}

/**
 * Clase que implementa un artista con discografía genérica
 * @template T
 */
export class GenericArtist<T> {
  constructor(public name: string, public monthlyListeners: number, public discography: Discography<T>) {}
}

/**
 * Clase que representa la biblioteca musical con discografía genérica
 */
export class GenericMusicLibrary {
  private artists: GenericArtist<any>[] = [];

  /**
   * Agrega un artista a la biblioteca
   * @param {GenericArtist<any>} artist - El artista a agregar
   */
  addArtist(artist: GenericArtist<any>): void {
    this.artists.push(artist);
  }

  /**
   * Muestra la información de la biblioteca en formato tabla
   */
  displayLibrary(): void {
    const libraryData = [];
    for (const artist of this.artists) {
      for (const item of artist.discography.getAll()) {
        if (item instanceof Album) {
          libraryData.push({
            Artist: artist.name,
            'Oyentes mensuales': artist.monthlyListeners,
            Album: item.name,
            Año: item.year,
            'N° Canciones': item.getSongCount(),
            'Duración Total (s)': item.getTotalDuration(),
            'Reproducciones Totales': item.getTotalPlays()
          });
        } else if (item instanceof Single) {
          libraryData.push({
            Artist: artist.name,
            'Oyentes mensuales': artist.monthlyListeners,
            Single: item.name,
            Año: item.year,
            'Duración (s)': item.song.duration,
            'Reproducciones': item.song.plays
          });
        }
      }
    }
    console.table(libraryData);
  }

  /**
   * Búsqueda de artistas utilizando un predicado
   * @param {(artist: GenericArtist<any>) => boolean} predicate - Función de búsqueda
   * @returns {GenericArtist<any>[]} Lista de artistas que cumplen con el predicado
   */
  searchArtists(predicate: (artist: GenericArtist<any>) => boolean): GenericArtist<any>[] {
    return this.artists.filter(predicate);
  }

  /**
   * Búsqueda de álbumes utilizando un predicado
   * @param {(album: Album) => boolean} predicate - Función de búsqueda
   * @returns {Album[]} Lista de álbumes que cumplen con el predicado
   */
  searchAlbums(predicate: (album: Album) => boolean): Album[] {
    const albums: Album[] = [];
    this.artists.forEach(artist => {
      artist.discography.getAll().forEach(item => {
        if (item instanceof Album && predicate(item)) {
          albums.push(item);
        }
      });
    });
    return albums;
  }

  /**
   * Búsqueda de singles utilizando un predicado
   * @param {(single: Single) => boolean} predicate - Función de búsqueda
   * @returns {Single[]} Lista de singles que cumplen con el predicado
   */
  searchSingles(predicate: (single: Single) => boolean): Single[] {
    const singles: Single[] = [];
    this.artists.forEach(artist => {
      artist.discography.getAll().forEach(item => {
        if (item instanceof Single && predicate(item)) {
          singles.push(item);
        }
      });
    });
    return singles;
  }

  /**
   * Búsqueda de canciones utilizando un predicado
   * @param {(song: Song) => boolean} predicate - Función de búsqueda
   * @returns {Song[]} Lista de canciones que cumplen con el predicado
   */
  searchSongs(predicate: (song: Song) => boolean): Song[] {
    const songs: Song[] = [];
    this.artists.forEach(artist => {
      artist.discography.getAll().forEach(item => {
        if (item instanceof Album) {
          songs.push(...item.songs.filter(predicate));
        } else if (item instanceof Single && predicate(item.song)) {
          songs.push(item.song);
        }
      });
    });
    return songs;
  }
}