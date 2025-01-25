import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Use environment variables
    pass: process.env.EMAIL_PASSWORD, // Use environment variables
  },
});

export async function handler(event) {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'harshajustin2@gmail.com',
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
}
