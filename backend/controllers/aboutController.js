const About = require('../models/About');

// Get about info
const getAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    if (!about) {
      about = await About.create({
        bio: 'Full Stack Developer passionate about creating amazing web experiences',
        headline: 'Full Stack Developer',
        socialLinks: {
          linkedin: '',
          github: '',
          twitter: '',
          instagram: '',
          portfolio: '',
        },
      });
    }

    res.json({ success: true, about });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update about info
const updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();

    if (!about) {
      about = await About.create(req.body);
    } else {
      about = await About.findByIdAndUpdate(about._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.json({ success: true, message: 'About updated', about });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAbout,
  updateAbout,
};
