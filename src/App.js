import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Login from './Components/Auth/Login';
import UserRegister from './Components/Auth/UserRegister';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Footer from './Components/Footer/Footer';
import './App.css';
import { Particles } from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Router>
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
            },
            detectRetina: true,
          }}
        />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;