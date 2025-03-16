import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectService } from '../../api/services/projects';
import { experienceService } from '../../api/services/experience';
import { contactService } from '../../api/services/contact';
import { authService } from '../../api/services/auth';
import './Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      if (!authService.isAuthenticated()) {
        console.log('No auth token found, redirecting to login');
        navigate('/admin/login');
        return false;
      }
      return true;
    };

    const fetchData = async () => {
      if (!checkAuth()) return;
      
      setLoading(true);
      setError('');
      
      try {
        console.log('Fetching dashboard data...');
        const [projectsData, experiencesData, messagesData] = await Promise.all([
          projectService.getAllProjects(),
          experienceService.getAllExperiences(),
          contactService.getAllMessages()
        ]);

        console.log('Data fetched successfully:', {
          projects: projectsData.length,
          experiences: experiencesData.length,
          messages: messagesData.length
        });

        setProjects(projectsData);
        setExperiences(experiencesData);
        setMessages(messagesData);
      } catch (err) {
        console.error('Dashboard data fetch error:', err);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const handleDeleteProject = async (id) => {
    try {
      await projectService.deleteProject(id);
      setProjects(projects.filter(project => project._id !== id));
    } catch (err) {
      setError('Failed to delete project');
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      await experienceService.deleteExperience(id);
      setExperiences(experiences.filter(exp => exp._id !== id));
    } catch (err) {
      setError('Failed to delete experience');
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await contactService.deleteMessage(id);
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (err) {
      setError('Failed to delete message');
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <h2>Loading dashboard...</h2>
        <p>Please wait while we fetch your data</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {authService.getUser()?.email}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      <section className="dashboard-section">
        <h2>Projects</h2>
        <button className="add-btn">Add New Project</button>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-actions">
                <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Experience</h2>
        <button className="add-btn">Add New Experience</button>
        <div className="experience-list">
          {experiences.map(exp => (
            <div key={exp._id} className="experience-item">
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <div className="item-actions">
                <button onClick={() => handleDeleteExperience(exp._id)}>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Messages</h2>
        <div className="messages-list">
          {messages.map(message => (
            <div key={message._id} className="message-card">
              <h3>{message.name}</h3>
              <p>{message.email}</p>
              <p>{message.message}</p>
              <button onClick={() => handleDeleteMessage(message._id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 