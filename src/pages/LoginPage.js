import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only - just simulate login
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Store user info in localStorage to simulate login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Dispatch custom event to notify navbar
    window.dispatchEvent(new Event('loginStateChange'));
    
    // Redirect to home page
    alert('Login successful! (Frontend only demo)');
    navigate('/');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google login (Frontend demo - not connected)');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    alert('Facebook login (Frontend demo - not connected)');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <Link to="/" className="brand-logo-login">GROUND</Link>
            <h2>Log in to your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password">
                Forgot your password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          <div className="signup-link">
            Don't have a Ground account? <Link to="/signup">Create one</Link>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          <div className="social-login">
            <button onClick={handleGoogleLogin} className="social-button google-button">
              <img src="/images/google-logo.svg" alt="Google" className="social-icon" />
              Continue with Google
            </button>
            <button onClick={handleFacebookLogin} className="social-button facebook-button">
              <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="login-info">
          <div className="info-content">
            <h3>Why create an account?</h3>
            <ul>
              <li>📰 Personalized news feed</li>
              <li>🔖 Save articles to read later</li>
              <li>⚙️ Customize your news preferences</li>
              <li>📊 Track your reading bias</li>
              <li>🌐 Sync across all devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
