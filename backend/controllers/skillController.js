const Skill = require('../models/Skill');

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) query.category = category;

    const skills = await Skill.find(query).sort({ category: 1, order: 1 });
    res.json({ success: true, skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single skill
const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ success: true, skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create skill (Admin only)
const createSkill = async (req, res) => {
  try {
    const { name, category, proficiency } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: 'Name and category are required' });
    }

    const skill = await Skill.create({
      name,
      category,
      proficiency: proficiency || 50,
    });

    res.status(201).json({ success: true, message: 'Skill created', skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update skill
const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ success: true, message: 'Skill updated', skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete skill
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ success: true, message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
