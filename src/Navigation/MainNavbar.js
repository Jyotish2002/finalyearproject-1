import React from 'react';

const MainNavbar = ({ activeSection, setActiveSection, searchQuery, setSearchQuery }) => {
  return (
    <header className="main-header">
      {/* Top Header */}
      <div className="header-top">
        <div className="header-top-left">
          <span>Browser Extension</span>
          <div className="theme-controls">
            <span>Theme:</span>
            <button className="theme-option">Light</button>
            <button className="theme-option">Dark</button>
            <button className="theme-option active">Auto</button>
          </div>
        </div>
        <div className="header-date">
          Saturday, September 6, 2025 Set Location
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
            <h1 className="brand-logo">GROUND</h1>
          </div>

          <nav className="primary-nav">
            <a href="#" className={activeSection === 'home' ? 'active' : ''} 
               onClick={() => setActiveSection('home')}>Home</a>
            <a href="#" className={activeSection === 'foryou' ? 'active' : ''} 
               onClick={() => setActiveSection('foryou')}>For You</a>
            <a href="#" className={activeSection === 'local' ? 'active' : ''} 
               onClick={() => setActiveSection('local')}>Local</a>
            <a href="#" className={activeSection === 'blindspot' ? 'active' : ''} 
               onClick={() => setActiveSection('blindspot')}>Blindspot</a>
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
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
