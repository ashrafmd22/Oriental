import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Path to your products.ts file
const filePath = './products.ts';

// Function to update the file with unique IDs
const updateProductIds = async () => {
  try {
    // Read the products.ts file
    const data = await fs.readFile(filePath, 'utf8');

    // Match all product objects in the file
    const productRegex = /{[^{}]*"id":\s*"[^"]*",/g;
    const updatedData = data.replace(productRegex, (match) => {
      // Replace the old id with a new uuid
      return match.replace(/"id":\s*"[^"]*"/, `"id": "${uuidv4()}"`);
    });

    // Write the updated data back to the file
    await fs.writeFile(filePath, updatedData, 'utf8');
    console.log('File updated successfully with unique IDs');
  } catch (err) {
    console.error('Error processing the file:', err);
  }
};

// Run the function
updateProductIds();
