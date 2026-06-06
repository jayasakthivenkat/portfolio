import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks';
import { useAuth } from '../hooks';
import { projectAPI, skillAPI, experienceAPI, certificationAPI, contactAPI, serviceAPI } from '../services';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects');
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    try {
      let response;
      switch (activeTab) {
        case 'projects':
          response = await projectAPI.getAll();
          setData(response.data.projects);
          break;
        case 'skills':
          response = await skillAPI.getAll();
          setData(response.data.skills);
          break;
        case 'experience':
          response = await experienceAPI.getAll();
          setData(response.data.experiences);
          break;
        case 'certifications':
          response = await certificationAPI.getAll();
          setData(response.data.certifications);
          break;
        case 'contacts':
          response = await contactAPI.getAll();
          setData(response.data.contacts);
          break;
        case 'services':
          response = await serviceAPI.getAll();
          setData(response.data.services);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      switch (activeTab) {
        case 'projects':
          await projectAPI.delete(id);
          break;
        case 'skills':
          await skillAPI.delete(id);
          break;
        case 'experience':
          await experienceAPI.delete(id);
          break;
        case 'certifications':
          await certificationAPI.delete(id);
          break;
        case 'contacts':
          await contactAPI.delete(id);
          break;
        case 'services':
          await serviceAPI.delete(id);
          break;
        default:
          break;
      }
      loadData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = ['projects', 'skills', 'experience', 'certifications', 'contacts', 'services'];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      {/* Header */}
      <div
        className={`${isDarkMode ? 'bg-dark-bg-secondary border-gray-800' : 'bg-light-bg-secondary border-gray-200'} border-b p-4`}
      >
        <div className="container-custom flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-error text-white rounded-lg font-semibold hover:bg-red-700"
          >
            <FaSignOutAlt /> Logout
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="container-custom mt-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActiveTab(tab);
                setShowForm(false);
              }}
              className={`px-4 py-2 rounded-lg font-semibold capitalize whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : isDarkMode
                  ? 'glass-dark hover:bg-primary/20'
                  : 'glass hover:bg-primary/10'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Add Button */}
        {activeTab !== 'contacts' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setShowForm(!showForm);
              setFormData({});
              setEditingId(null);
            }}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark"
          >
            <FaPlus /> Add {activeTab.slice(0, -1)}
          </motion.button>
        )}

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-6 rounded-lg ${isDarkMode ? 'glass-dark' : 'glass'}`}
          >
            <h3 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <textarea
                placeholder="Content"
                value={JSON.stringify(formData, null, 2)}
                onChange={(e) => {
                  try {
                    setFormData(JSON.parse(e.target.value));
                  } catch {}
                }}
                rows="10"
                className={`col-span-full px-4 py-3 rounded-lg bg-transparent border ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                } focus:outline-none resize-none`}
              />
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
              >
                Save
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowForm(false)}
                className={`px-6 py-2 rounded-lg border ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                } hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Data Table */}
        <div className="grid gap-4">
          {data.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${isDarkMode ? 'glass-dark' : 'glass'} flex justify-between items-center`}
            >
              <div>
                <h4 className="font-semibold">
                  {item.title ||
                    item.name ||
                    item.jobTitle ||
                    item.email ||
                    'Item'}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description ||
                    item.category ||
                    item.company ||
                    item.subject ||
                    ''}
                </p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-primary hover:bg-primary/10 rounded"
                  onClick={() => {
                    setFormData(item);
                    setEditingId(item._id);
                    setShowForm(true);
                  }}
                >
                  <FaEdit />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-error hover:bg-error/10 rounded"
                  onClick={() => handleDelete(item._id)}
                >
                  <FaTrash />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No {activeTab} found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
