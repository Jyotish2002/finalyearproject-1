import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MainNavbar = ({ searchQuery, setSearchQuery, theme, setTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || '';
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  // Listen for storage changes (login/logout from other components)
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const name = localStorage.getItem('userName') || '';
      setIsLoggedIn(loggedIn);
      setUserName(name);
    };

    window.addEventListener('storage', handleStorageChange);
    // Custom event for same-window updates
    window.addEventListener('loginStateChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('loginStateChange', handleStorageChange);
    };
  }, []);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserName('');
    setShowDropdown(false);
    // Dispatch custom event
    window.dispatchEvent(new Event('loginStateChange'));
    navigate('/');
  };

  const getUserInitials = () => {
    if (!userName) return 'U';
    const names = userName.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return userName.substring(0, 2).toUpperCase();
  };

  return (
    <header className="main-header">
      {/* Top Header */}
      <div className="header-top">
        <div className="header-top-left">
          <span>Browser Extension</span>
          <div className="theme-controls">
            <span>Theme:</span>
            <button 
              className={`theme-option ${theme === 'light' ? 'active' : ''}`}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
            <button 
              className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
            <button 
              className={`theme-option ${theme === 'auto' ? 'active' : ''}`}
              onClick={() => setTheme('auto')}
            >
              Auto
            </button>
          </div>
        </div>
        <div className="header-date">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })} Set Location
        </div>
        <div className="header-edition">
          🌍 International Edition ⌄
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-container">
          <div className="brand-section">
            <button className="menu-toggle">☰</button>
            <Link to="/" className="brand-logo">GROUND</Link>
          </div>

          <nav className="primary-nav">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/foryou" className={isActive('/foryou') ? 'active' : ''}>For You</Link>
            <Link to="/local" className={isActive('/local') ? 'active' : ''}>Local</Link>
            <Link to="/blindspot" className={isActive('/blindspot') ? 'active' : ''}>Blindspot</Link>
          </nav>

          <div className="header-actions">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            <button className="subscribe-button">Subscribe</button>
            
            {isLoggedIn ? (
              <div className="user-menu">
                <button 
                  className="user-menu-button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="user-avatar">{getUserInitials()}</div>
                  <span className="user-name">{userName}</span>
                  <span>⌄</span>
                </button>
                
                {showDropdown && (
                  <div className="user-dropdown">
                    <Link to="/foryou" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                      ⚙️ Preferences
                    </Link>
                    <Link to="/" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                      📰 My Feed
                    </Link>
                    <button className="dropdown-item logout" onClick={handleLogout}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="login-button">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
