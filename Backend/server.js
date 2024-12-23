const express = require('express');
const cors = require('cors');
const { sendCorporateOrderEmail, sendContactFormEmail } = require('./email');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route for handling corporate order form submissions
app.post('/submit-corporate-order', async (req, res) => {
  try {
    const formData = req.body;
    await sendCorporateOrderEmail(formData);
    res.status(200).json({ message: 'Corporate order form submitted successfully!' });
  } catch (error) {
    console.error('Error sending corporate order email:', error);
    res.status(500).json({ message: 'Failed to send corporate order email' });
  }
});

// Route for handling contact form submissions
app.post('/submit-contact-form', async (req, res) => {
  try {
    const formData = req.body;
    await sendContactFormEmail(formData);
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error sending contact form email:', error);
    res.status(500).json({ message: 'Failed to send contact form email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
