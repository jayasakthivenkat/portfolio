/**
 * Email sending utility
 * Configure with your email service
 */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
};

const sendContactConfirmation = (name, email) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #6366f1;">Thank You for Reaching Out!</h2>
      <p>Hi ${name},</p>
      <p>I received your message and will get back to you as soon as possible.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #666;">Best regards,<br>Portfolio Team</p>
    </div>
  `;
  return sendEmail(email, 'Message Received - Portfolio', html);
};

module.exports = {
  sendEmail,
  sendContactConfirmation,
};
