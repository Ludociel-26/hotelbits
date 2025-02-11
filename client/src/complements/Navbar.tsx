import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { assets } from '../assets/assets';

function Navbar() {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
      data.success ? (navigate('/email-verify'), toast.success(data.message)) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <img src={assets.logo} alt="Logo" className='w-24 cursor-pointer' onClick={() => navigate('/')} />
        
        {!isMobile && (
          <nav className="flex items-center gap-4">
            <NavLinks />
            <ThemeToggle toggleTheme={toggleDarkMode} darkMode={darkMode} />
            {userData ? <UserMenu userData={userData} logout={logout} sendVerificationOtp={sendVerificationOtp} /> :
              <a href="/login" style={buttonPrimary}>Iniciar Sesión</a>}
          </nav>
        )}
        
        {isMobile && (
          <button className="md:hidden" onClick={toggleMenu} style={buttonStyle}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/50 backdrop-blur-md">
            <nav className="mx-auto px-4 py-4 flex flex-col gap-4">
              <NavLinks mobile toggleMenu={closeMenu} />
              <ThemeToggle toggleTheme={toggleDarkMode} darkMode={darkMode} />
              {userData ? <UserMenu userData={userData} logout={logout} sendVerificationOtp={sendVerificationOtp} /> :
                <a href="/login" style={buttonPrimary}>Iniciar Sesión</a>}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLinks({ mobile = false, toggleMenu }) {
  return (
    <>
      <a href="/habitaciones" onClick={toggleMenu} style={buttonStyle}>Habitaciones</a>
      <a href="/servicios" onClick={toggleMenu} style={buttonStyle}>Servicios</a>
      <a href="/ubicacion" onClick={toggleMenu} style={buttonStyle}>Ubicación</a>
    </>
  );
}

function ThemeToggle({ toggleTheme, darkMode }) {
  return (
    <motion.button onClick={toggleTheme} style={buttonStyle} animate={{ rotate: darkMode ? 180 : 0 }}>
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </motion.button>
  );
}

function UserMenu({ userData, logout, sendVerificationOtp }) {
  return (
    <div className="relative group">
      <button style={buttonStyle}>{userData.name[0]}</button>
      <div className="absolute hidden group-hover:block bg-black/50 backdrop-blur-md p-2 mt-2 rounded-lg">
        {!userData.isVerified && <button onClick={sendVerificationOtp} style={buttonStyle}>Validar Correo</button>}
        <button onClick={logout} style={buttonPrimary}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  background: "rgba(255,255,255,0.05)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.1)",
  padding: "10px 20px",
  borderRadius: "30px",
  fontSize: "14px",
  cursor: "pointer",
  backdropFilter: "blur(6px)",
  transition: "all 0.3s ease",
  textAlign: "center",
  display: "inline-block",
  margin: "4px 0",
};

const buttonPrimary = {
  ...buttonStyle,
  background: "#007bff",
  color: "white",
  border: "none",
};

export default Navbar;
