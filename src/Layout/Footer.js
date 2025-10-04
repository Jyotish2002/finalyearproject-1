import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Top Footer Links */}
        <div className="footer-sections">
          <div className="footer-section">
            <h3>News</h3>
            <ul>
              <li><a href="#">Home Page</a></li>
              <li><a href="#">Local News</a></li>
              <li><a href="#">Blindspot Feed</a></li>
              <li><a href="#">International</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>International</h3>
            <ul>
              <li><a href="#">North America</a></li>
              <li><a href="#">South America</a></li>
              <li><a href="#">Europe</a></li>
              <li><a href="#">Asia</a></li>
              <li><a href="#">Australia</a></li>
              <li><a href="#">Africa</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Trending Internationally</h3>
            <ul>
              <li><a href="#">Volleyball</a></li>
              <li><a href="#">World Cup</a></li>
              <li><a href="#">Soccer</a></li>
              <li><a href="#">Donald Trump</a></li>
              <li><a href="#">Motorsports</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Trending in U.S.</h3>
            <ul>
              <li><a href="#">Israel-Gaza</a></li>
              <li><a href="#">Volleyball</a></li>
              <li><a href="#">Donald Trump</a></li>
              <li><a href="#">US Economy</a></li>
              <li><a href="#">NFL</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Trending in U.K.</h3>
            <ul>
              <li><a href="#">Israel-Gaza</a></li>
              <li><a href="#">Manchester United</a></li>
              <li><a href="#">Premier League</a></li>
              <li><a href="#">Soccer</a></li>
              <li><a href="#">Angela Rayner</a></li>
            </ul>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <h2>GROUND</h2>
              <span>News</span>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Group Subscriptions</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Gift</a></li>
                <li><a href="#">Free Trial</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Affiliates</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Help</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">For Educators/Libraries</a></li>
                <li><a href="#">Media Bias Ratings</a></li>
                <li><a href="#">Ownership and Factuality Ratings</a></li>
                <li><a href="#">Referral Code</a></li>
                <li><a href="#">News Sources</a></li>
                <li><a href="#">Topics</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Tools</h4>
              <ul>
                <li><a href="#">App</a></li>
                <li><a href="#">Browser Extension</a></li>
                <li><a href="#">Daily Newsletter</a></li>
                <li><a href="#">Blindspot Report Newsletter</a></li>
                <li><a href="#">Burst Your Bubble Newsletter</a></li>
                <li><a href="#">Timelines</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#">Gift</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Manage Cookies</a>
            <a href="#">Privacy Preferences</a>
            <a href="#">Terms and Conditions</a>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/images/x.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/instra.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/images/linkdin.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
              <img src="/images/reddit.png" alt="Reddit" className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="copyright">
          © 2025 made by anindita
        </div>
      </div>
    </footer>
  );
};

export default Footer;
