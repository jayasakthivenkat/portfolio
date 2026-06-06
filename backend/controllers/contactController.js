const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create transporter for email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Submit contact form
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Message Received - Portfolio',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We received your message and will get back to you soon.</p>
          <hr>
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all contact messages (Admin only)
const getAllContacts = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {};
    if (status) query.status = status;

    const contacts = await Contact.find(query).sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single contact
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true, status: 'read' },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ success: true, contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Reply to contact
const replyContact = async (req, res) => {
  try {
    const { reply } = req.body;

    if (!reply) {
      return res.status(400).json({ message: 'Reply message required' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        reply,
        replyDate: new Date(),
        status: 'replied',
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Send reply email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: contact.email,
        subject: `Re: ${contact.subject}`,
        html: `
          <h2>Reply to your inquiry</h2>
          <p>Hi ${contact.name},</p>
          <p>${reply}</p>
          <hr>
          <p>Best regards,<br>Portfolio Team</p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
    }

    res.json({ success: true, message: 'Reply sent', contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  submitContact,
  getAllContacts,
  getContactById,
  replyContact,
  deleteContact,
};
