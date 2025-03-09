import { describe, it, expect, vi } from 'vitest';
import { FileManager, FileReader, FileWriter } from '../src/ejercicio-3';

describe('FileManager', () => {
  const filePath = 'test.txt';
  const mockFileReader = {
    readFile: vi.fn()
  };
  const mockFileWriter = {
    writeFile: vi.fn()
  };
  const fileManager = new FileManager(filePath, mockFileReader, mockFileWriter);

  it('should read file content', () => {
    const fileContent = 'File content';
    mockFileReader.readFile.mockReturnValue(fileContent);

    const result = fileManager.readFile();

    expect(result).toBe(fileContent);
    expect(mockFileReader.readFile).toHaveBeenCalledWith(filePath);
  });

  it('should write file content', () => {
    const newData = 'New file content';

    fileManager.writeFile(newData);

    expect(mockFileWriter.writeFile).toHaveBeenCalledWith(filePath, newData);
  });
});