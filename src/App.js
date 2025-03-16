import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Contact from './Components/Contact'; // New Component
import Education from './Components/Education'; // New Component
import Experience from './Components/Experience'; // New Component
import Services from './Components/Services'; // New Component
import ImageComponent from './Components/ImageComponent';
import About from './Components/About';
import Projects from './Components/Projects'; // Corrected import
import ScrollToTop from './Components/ScrollToTop';
import Login from './Components/Admin/Login';
import Dashboard from './Components/Admin/Dashboard';
import './App.css';
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0a0a23",
          },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#87CEEB", "#4169E1"] },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4169E1",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              }
            }
          },
          detectRetina: true,
        }}
      />
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          
          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <ScrollToTop />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;