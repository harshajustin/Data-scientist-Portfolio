import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '22eg107a47@anurag.edu.in', // Replace with your email
    pass: 'jnomaligqebuoywl', // Replace with your App Password
  },
});

// Email Route
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: '22eg107a47@anurag.edu.in', // Replace with your email
      to: 'harshajustin2@gmail.com',  // Replace with recipient email
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
