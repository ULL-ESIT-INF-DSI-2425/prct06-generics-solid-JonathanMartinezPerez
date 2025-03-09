/**
 * Este código violaba los principios de responsabilidad única
 * y el de inversión de dependencias
 */
import * as fs from "fs";

/**
 * Interface for reading files
 */
export interface IFileReader {
  readFile(filePath: string): string;
}

/**
 * Interface for writing files
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}

/**
 * Implementation of IFileReader using fs module
 */
export class FileReader implements IFileReader {
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

/**
 * Implementation of IFileWriter using fs module
 */
export class FileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

/**
 * FileManager class that depends on abstractions
 */
export class FileManager {
  constructor(
    private filePath: string,
    private fileReader: IFileReader,
    private fileWriter: IFileWriter
  ) {}

  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}

// Client code
const filePath = "example.txt";
const fileReader = new FileReader();
const fileWriter = new FileWriter();
const fileManager = new FileManager(filePath, fileReader, fileWriter);

// Reading content
const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);