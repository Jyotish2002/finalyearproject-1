import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { topicCategories } from './mockData';

// Import Components
import MainNavbar from './Navigation/MainNavbar';
import TopicsBar from './Navigation/TopicsBar';
import Footer from './Layout/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import LocalPage from './pages/LocalPage';
import BlindspotPage from './pages/BlindspotPage';
import ForYouPage from './pages/ForYouPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Import CSS
import './styles/global.css';
import './styles/header.css';
import './styles/topics.css';
import './styles/main-content.css';
import './styles/gallery.css';
import './styles/sidebar.css';
import './styles/footer.css';
import './styles/pages.css';
import './styles/auth.css';

function AppContent() {
  const location = useLocation();
  const [activeTopic, setActiveTopic] = useState('Israel-Gaza');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(() => {
    // Get saved theme or default to 'auto'
    return localStorage.getItem('theme') || 'auto';
  });

  // Check if current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  // Handle theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = (selectedTheme) => {
      if (selectedTheme === 'auto') {
        // Check system preference
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } else {
        root.setAttribute('data-theme', selectedTheme);
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // Listen for system theme changes if auto mode
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <div className="ground-news-app">
      {/* Show header/footer only for non-auth pages */}
      {!isAuthPage && (
        <>
          {/* Top Banner */}
          <div className="promo-banner">
            <span>See every side of every news story</span>
            <button className="get-started-btn">Get Started</button>
          </div>

          <MainNavbar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            theme={theme}
            setTheme={setTheme}
          />

          <TopicsBar 
            topicCategories={topicCategories}
            activeTopic={activeTopic}
            setActiveTopic={setActiveTopic}
          />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foryou" element={<ForYouPage />} />
        <Route path="/local" element={<LocalPage />} />
        <Route path="/blindspot" element={<BlindspotPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* Show footer only for non-auth pages */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
