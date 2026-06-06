/**
 * Validation utilities for API inputs
 */

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const validateProjectData = (data) => {
  const errors = [];
  
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (!data.description || data.description.trim().length === 0) {
    errors.push('Description is required');
  }
  
  if (!data.shortDescription || data.shortDescription.trim().length === 0) {
    errors.push('Short description is required');
  }
  
  if (data.link && !validateURL(data.link)) {
    errors.push('Invalid project URL');
  }
  
  if (data.github && !validateURL(data.github)) {
    errors.push('Invalid GitHub URL');
  }
  
  return errors;
};

const validateContactData = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Subject is required');
  }
  
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Message is required');
  }
  
  return errors;
};

module.exports = {
  validateEmail,
  validateURL,
  validateProjectData,
  validateContactData,
};
