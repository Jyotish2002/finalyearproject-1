import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup attempt:', formData);
    
    // Store user info
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userName', formData.name);
    
    // Dispatch custom event to notify navbar
    window.dispatchEvent(new Event('loginStateChange'));
    
    alert('Account created successfully! (Frontend demo)');
    navigate('/');
  };

  const handleGoogleSignup = () => {
    alert('Google signup (Frontend demo - not connected)');
  };

  const handleFacebookSignup = () => {
    alert('Facebook signup (Frontend demo - not connected)');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <Link to="/" className="brand-logo-login">GROUND</Link>
            <h2>Create your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Create Account
            </button>
          </form>

          <div className="signup-link">
            Already have an account? <Link to="/login">Log in</Link>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          <div className="social-login">
            <button onClick={handleGoogleSignup} className="social-button google-button">
              <img src="/images/google-logo.svg" alt="Google" className="social-icon" />
              Continue with Google
            </button>
            <button onClick={handleFacebookSignup} className="social-button facebook-button">
              <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
              Continue with Facebook
            </button>
          </div>

          <p className="terms-text">
            By creating an account, you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>
          </p>
        </div>

        <div className="login-info">
          <div className="info-content">
            <h3>Join Ground News</h3>
            <ul>
              <li>📰 Access to personalized news</li>
              <li>🔖 Save and organize articles</li>
              <li>⚙️ Customize your experience</li>
              <li>📊 See your reading bias</li>
              <li>🌐 Sync across devices</li>
              <li>✉️ Newsletter subscriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
