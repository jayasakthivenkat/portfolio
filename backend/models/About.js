const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
    },
    resumeUrl: {
      type: String,
      required: false,
    },
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      instagram: String,
      portfolio: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
