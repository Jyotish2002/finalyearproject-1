import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Main Footer with 5 Columns */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <h2>GROUND</h2>
              <span>News</span>
            </div>
            <p className="footer-tagline">See the full picture</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>News</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Blindspot</a></li>
                <li><a href="#">International</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>International</h4>
              <ul>
                <li><a href="#">North America</a></li>
                <li><a href="#">South America</a></li>
                <li><a href="#">Europe</a></li>
                <li><a href="#">Asia</a></li>
                <li><a href="#">Australia</a></li>
                <li><a href="#">Africa</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Trending</h4>
              <ul>
                <li><a href="#">Israel-Gaza</a></li>
                <li><a href="#">Donald Trump</a></li>
                <li><a href="#">Volleyball</a></li>
                <li><a href="#">World Cup</a></li>
                <li><a href="#">US Economy</a></li>
                <li><a href="#">NFL</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Gift</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Help & Tools</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Media Bias Ratings</a></li>
                <li><a href="#">App</a></li>
                <li><a href="#">Browser Extension</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Manage Cookies</a>
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
