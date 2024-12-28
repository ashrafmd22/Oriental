import fs from 'fs';
import path from 'path';

// Path to your images directory
const imagesDir = './Bags';

// Function to rename .JPG files to .jpg
const renameImages = (directory) => {
  // Read all files in the directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Loop through each file in the directory
    files.forEach((file) => {
      // Check if the file has a .JPG extension
      if (file.toLowerCase().endsWith('.JPG')) {
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, file.toLowerCase()); // Rename to lowercase .jpg

        // Rename the file
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`Error renaming file ${file}:`, err);
          } else {
            console.log(`Renamed ${file} to ${file.toLowerCase()}`);
          }
        });
      }
    });
  });
};

// Call the function with your directory path
renameImages(imagesDir);
