'use client';
import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [errors, setErrors] = useState([]); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await axios.post('http://localhost:5151/api/Accounts/register', {
        userName,
        email,
        password,
        role,
      });

      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      // Reset form
      setUserName('');
      setEmail('');
      setPassword('');
      setRole('student');
    } catch (error) {
      
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        setErrors(errorMessages);  
      } else {
        console.error('Signup error:', error.response?.data || error.message);
        setErrors(['Signup failed. Please try again.']); 
      }
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header className="navbar">
        <img src="/images/logo.png" alt="Logo" className="logo" />
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
        
       
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">{error}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="role"
                value="Student"
                checked={role === 'Student'}
                onChange={(e) => setRole(e.target.value)}
              /> Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Teacher"
                checked={role === 'Teacher'}
                onChange={(e) => setRole(e.target.value)}
              /> Teacher
            </label>
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
