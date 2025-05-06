'use client';
import React, { useState } from 'react';
import './signup.css'; // Ensure this CSS file exists in the correct location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header className="navbar">
        <img src="/images/logo.png" alt="Logo" className="logo" /> {/* Corrected the image path */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="What do you want to learn?" />
        </div>
      </header>

      {/* Sign Up Form */}
      <main className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" name="Full Name" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="radio-group">
            <label><input type="radio" name="role" value="student" required /> Student</label>
            <label><input type="radio" name="role" value="teacher" /> Teacher</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <div className="divider">Other sign up options</div>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faApple} />
        </div>
      </main>
    </div>
  );
};

export default Signup;
