import { describe, it, expect } from 'vitest';
import { Printer, Scanner, PrinterScanner } from '../src/ejercicio-4';

describe('Printer', () => {
  it('should print', () => {
    const printer = new Printer();
    expect(printer.print()).toBeUndefined();
  });
});

describe('Scanner', () => {
  it('should scan', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).toBeUndefined();
  });
});

describe('PrinterScanner', () => {
  it('should print and scan', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).toBeUndefined();
    expect(printerScanner.scan()).toBeUndefined();
  });
});