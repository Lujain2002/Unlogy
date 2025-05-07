'use client';
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faApple
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5151/api/Accounts/login', {
        username, // match the backend LoginDto
        password
      });

      console.log('Login successful:', response.data);
      // Store token or redirect
      // localStorage.setItem('token', response.data.token);
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <header className="navbar">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
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

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="password">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forget password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>

      <div className="login-right">
        <h2>New Here?</h2>
        <p>Sign up and discover a great amount of new opportunities</p>
        <button className="sign-up-btn" onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
