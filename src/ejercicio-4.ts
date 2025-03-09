/**
 * Este código violaba el principio de segregación de interfaces
 */
// Interface for printing
interface Printable {
  print(): void;
}

// Interface for scanning
interface Scannable {
  scan(): void;
}

// Printer class implementing Printable interface
export class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

// Scanner class implementing Scannable interface
export class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

// PrinterScanner class implementing both Printable and Scannable interfaces
export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();