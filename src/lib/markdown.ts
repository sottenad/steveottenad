import fs from 'fs';
import path from 'path';

/**
 * Read a markdown file from the file system
 * @param filePath Path to the markdown file
 * @returns The content of the markdown file or null if the file doesn't exist
 */
export const readMarkdownFile = (filePath: string): string | null => {
  try {
    // Convert relative path to absolute path
    const absolutePath = path.join(process.cwd(), filePath);
    
    // Read the file
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    return null;
  }
};