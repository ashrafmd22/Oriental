const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Gmail username from .env
    pass: process.env.EMAIL_PASS, // Gmail password or app-specific password from .env
  },
});

/**
 * Function to send email for the corporate order form.
 */
const sendCorporateOrderEmail = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'ashhiimd@gmail.com', // Receiver email address
    subject: 'Corporate Order Form Submission',
    text: `
      Corporate Order Form Details:

      Company Name: ${formData.companyName}
      Contact Person: ${formData.contactPerson}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Product Requirements: ${formData.productRequirements}
    `,
  };

  // Send mail with defined transport object
  return transporter.sendMail(mailOptions);
};

/**
 * Function to send email for the contact form.
 */
const sendContactFormEmail = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'ashhiimd@gmail.com', // Receiver email address
    subject: 'New Contact Form Submission',
    text: `
      You have received a new message from the contact form:

      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `,
  };

  // Send mail with defined transport object
  return transporter.sendMail(mailOptions);
};

module.exports = { sendCorporateOrderEmail, sendContactFormEmail };
