const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    link: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      enum: ['web', 'mobile', 'desktop', 'other'],
      default: 'web',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['completed', 'in-progress', 'planned'],
      default: 'completed',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
