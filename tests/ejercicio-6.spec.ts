import { describe, it, expect, vi } from 'vitest';
import { Bird, Sparrow, Penguin, Flyable } from '../src/ejercicio-6';

describe('Bird', () => {
  it('should describe a bird', () => {
    const bird = new Bird();
    const consoleSpy = vi.spyOn(console, 'log');
    bird.describe();
    expect(consoleSpy).toHaveBeenCalledWith('I am a bird.');
  });
});

describe('Sparrow', () => {
  it('should describe a sparrow', () => {
    const sparrow = new Sparrow();
    const consoleSpy = vi.spyOn(console, 'log');
    sparrow.describe();
    expect(consoleSpy).toHaveBeenCalledWith('I am a bird.');
  });

  it('should fly', () => {
    const sparrow = new Sparrow();
    const consoleSpy = vi.spyOn(console, 'log');
    sparrow.fly();
    expect(consoleSpy).toHaveBeenCalledWith('Flying...');
  });
});

describe('Penguin', () => {
  it('should describe a penguin', () => {
    const penguin = new Penguin();
    const consoleSpy = vi.spyOn(console, 'log');
    penguin.describe();
    expect(consoleSpy).toHaveBeenCalledWith('I am a penguin and I cannot fly.');
  });
});