import { expect, describe, it } from 'vitest';
import { Song, Album, Single, GenericArtist, Discography, GenericMusicLibrary } from '../src/ejercicio-2';

describe('GenericMusicLibrary', () => {
  it('should add an artist to the library', () => {
    const library = new GenericMusicLibrary();
    const artist = new GenericArtist('Artist Name', 1000, new Discography<Album | Single>());
    library.addArtist(artist);
    expect(library.searchArtists(a => a.name === 'Artist Name')).to.include(artist);
  });

  it('should search albums by name', () => {
    const library = new GenericMusicLibrary();
    const album = new Album('Album Name', 2020, [new Song('Song 1', 200, ['Pop'], false, 100)]);
    const artist = new GenericArtist('Artist Name', 1000, new Discography<Album | Single>([album]));
    library.addArtist(artist);
    expect(library.searchAlbums(a => a.name === 'Album Name')).to.include(album);
  });

  it('should search singles by name', () => {
    const library = new GenericMusicLibrary();
    const single = new Single('Single Name', 2021, new Song('Song 1', 200, ['Pop'], true, 100));
    const artist = new GenericArtist('Artist Name', 1000, new Discography<Album | Single>([single]));
    library.addArtist(artist);
    expect(library.searchSingles(s => s.name === 'Single Name')).to.include(single);
  });

  it('should search songs by name', () => {
    const library = new GenericMusicLibrary();
    const song = new Song('Song 1', 200, ['Pop'], false, 100);
    const album = new Album('Album Name', 2020, [song]);
    const artist = new GenericArtist('Artist Name', 1000, new Discography<Album | Single>([album]));
    library.addArtist(artist);
    expect(library.searchSongs(s => s.name === 'Song 1')).to.include(song);
  });
});