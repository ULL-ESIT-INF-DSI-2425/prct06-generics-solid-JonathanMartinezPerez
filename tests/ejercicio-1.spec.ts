import { expect, describe, it } from 'vitest';
import { SeriesCollection, Series, MoviesCollection, Movie, DocumentariesCollection, Documentary } from '../src/ejercicio-1';

describe('SeriesCollection', () => {
  it('should add a series to the collection', () => {
    const collection = new SeriesCollection();
    const series = new Series('Breaking Bad', 2008);
    collection.add(series);
    expect(collection.searchByName('Breaking Bad')).to.include(series);
  });

  it('should search series by name', () => {
    const collection = new SeriesCollection();
    const series1 = new Series('Breaking Bad', 2008);
    const series2 = new Series('Better Call Saul', 2015);
    collection.add(series1);
    collection.add(series2);
    expect(collection.searchByName('Breaking Bad')).to.include(series1);
    expect(collection.searchByName('Breaking Bad')).to.not.include(series2);
  });

  it('should search series by year', () => {
    const collection = new SeriesCollection();
    const series1 = new Series('Breaking Bad', 2008);
    const series2 = new Series('Better Call Saul', 2015);
    collection.add(series1);
    collection.add(series2);
    expect(collection.searchByYear(2008)).to.include(series1);
    expect(collection.searchByYear(2008)).to.not.include(series2);
  });
});

describe('MoviesCollection', () => {
  it('should add a movie to the collection', () => {
    const collection = new MoviesCollection();
    const movie = new Movie('Inception', 2010);
    collection.add(movie);
    expect(collection.searchByName('Inception')).to.include(movie);
  });

  it('should search movies by name', () => {
    const collection = new MoviesCollection();
    const movie1 = new Movie('Inception', 2010);
    const movie2 = new Movie('Interstellar', 2014);
    collection.add(movie1);
    collection.add(movie2);
    expect(collection.searchByName('Inception')).to.include(movie1);
    expect(collection.searchByName('Inception')).to.not.include(movie2);
  });

  it('should search movies by year', () => {
    const collection = new MoviesCollection();
    const movie1 = new Movie('Inception', 2010);
    const movie2 = new Movie('Interstellar', 2014);
    collection.add(movie1);
    collection.add(movie2);
    expect(collection.searchByYear(2010)).to.include(movie1);
    expect(collection.searchByYear(2010)).to.not.include(movie2);
  });
});

describe('DocumentariesCollection', () => {
  it('should add a documentary to the collection', () => {
    const collection = new DocumentariesCollection();
    const documentary = new Documentary('Planet Earth', 2006);
    collection.add(documentary);
    expect(collection.searchByName('Planet Earth')).to.include(documentary);
  });

  it('should search documentaries by name', () => {
    const collection = new DocumentariesCollection();
    const documentary1 = new Documentary('Planet Earth', 2006);
    const documentary2 = new Documentary('The Last Dance', 2020);
    collection.add(documentary1);
    collection.add(documentary2);
    expect(collection.searchByName('Planet Earth')).to.include(documentary1);
    expect(collection.searchByName('Planet Earth')).to.not.include(documentary2);
  });

  it('should search documentaries by year', () => {
    const collection = new DocumentariesCollection();
    const documentary1 = new Documentary('Planet Earth', 2006);
    const documentary2 = new Documentary('The Last Dance', 2020);
    collection.add(documentary1);
    collection.add(documentary2);
    expect(collection.searchByYear(2006)).to.include(documentary1);
    expect(collection.searchByYear(2006)).to.not.include(documentary2);
  });
});