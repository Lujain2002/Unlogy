'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './login.css'; // Ensure this CSS file exists in the correct location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Login= () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-left">
      <header className="navbar">
        <img src="/images/logo.png" alt="Logo" className="logo" /> {/* Corrected the image path */}
        <ul className="nav-links">
          <li><a href="/public">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        </header>

        <h2>Login to Your Account</h2>
        <p>Login with social network</p>

        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGoogle} />
          <FontAwesomeIcon icon={faApple} />
        </div>

        <div className="divider">OR</div>

        <form>
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
          <div className='password'>
            <label  >
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button className="login-button">Sign in</button>
        </form>
      </div>

      <div className="login-right">
        
        <h2>New Here?</h2>
        <p>sign up and discover a great amount of new opportunities</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
