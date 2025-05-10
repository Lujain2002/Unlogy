'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import './public.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { FaArrowLeft, FaArrowRight, FaClock, FaStar } from 'react-icons/fa';

const Public = () => {
  const categories = [
    { title: "Computer Skills", courses: 7, icon: "/images/computer skills.png" },
    { title: "Cyber Security", courses: 11, icon: "/images/Cyber Security.png" },
    { title: "Programming Fundamentals", courses: 19, icon: "/images/Programming Fundamentals.png" },
    { title: "Computer Networks", courses: 3, icon: "/images/Computer Networks.png" },
    { title: "Backend Development", courses: 15, icon: "/images/Backend Development.png" },
    { title: "Engineering Fundamentals", courses: 3, icon: "/images/Engineering Fundamentals.png" },
    { title: "Frontend Fundamentals", courses: 21, icon: "/images/Frontend Fundamentals.png" },
    { title: "Mobile App Programming", courses: 6, icon: "/images/Mobile App Programming.png" },
  ];

  const courses = Array.from({ length: 6 }, () => ({
    title: 'Introduction to Programming with Python II',
    rating: 4,
    reviews: 100,
    duration: '36 Hours',
    image: '/images/course-thumb.jpg'
  }));

  const recommended = Array.from({ length: 6 }, () => ({
    title: 'AI-Powered Productivity with Microsoft 365 Copilot',
    rating: 5,
    reviews: 306,
    duration: '22 Hours',
    image: '/images/recommended.jpg'
  }));

  const scrollRef1 = useRef<HTMLDivElement | null>(null);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
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

      {/* Upper Public Section */}
      <div className='upper-public'>
        <p className='p1'>Start learning today</p>
        <p className='p2'>The Best<br /> Platform Enroll in<br /> Your Special <br />Course</p>
        <p className='p3'>Your Coding Journey Starts Here.<br />Interactive, flexible, and fun programming courses<br /> for future developers.</p>
        <div className="button-group">
          <Link href="/login"><button className='login-button'>Login</button></Link>
          <Link href="/signup"><button className='signup-button'>Sign Up</button></Link>
        </div>
      </div>

      {/* Top Categories */}
      <div className='top-categories'>
        <p className='tc'>Top Categories</p>
        <button className="show-all-btn">Show all courses</button>
        <section className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.icon} alt={cat.title} className="category-icon" />
              <h3>{cat.title}</h3>
              <p>{cat.courses} Courses</p>
            </div>
          ))}
        </section>
      </div>

      {/* Popular Courses */}
      <section className="popular-courses-section">
        <div className="section-header">
          <h2>Most Popular Courses</h2>
          <div className="scroll-buttons">
            <button onClick={() => scroll(scrollRef1, 'left')}><FaArrowLeft /></button>
            <button onClick={() => scroll(scrollRef1, 'right')}><FaArrowRight /></button>
          </div>
        </div>
        <div className="courses-scroll-container" ref={scrollRef1}>
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} color={i < course.rating ? 'gold' : '#ccc'} />
                ))}
                <span>({course.reviews})</span>
              </div>
              <div className="duration">
                <FaClock /> <span>{course.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="courses-recommended-section">
        <div className="recommended-header">
          <h2>Courses Recommended for You</h2>
          <div className="scroll-buttons">
            <button onClick={() => scroll(scrollRef2, 'left')}><FaArrowLeft /></button>
            <button onClick={() => scroll(scrollRef2, 'right')}><FaArrowRight /></button>
          </div>
        </div>
        <div className="courses-scroll-container" ref={scrollRef2}>
          {recommended.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} color={i < course.rating ? 'gold' : '#ccc'} />
                ))}
                <span>({course.reviews})</span>
              </div>
              <div className="duration">
                <FaClock /> <span>{course.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="unolgy-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <p className="tagline">
              a leading e-learning platform, harnessing the power of programmers to offer high-quality programming courses.
              Whether you're just starting out or looking to upskill, Unolgy helps you build your career and grow your tech
              knowledge – all for free.
            </p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faGoogle} />
              <FontAwesomeIcon icon={faApple} />
            </div>
          </div>
          <div className="footer-profile">
            <h3>Your Profile</h3>
            <ul>
              <li><Link href="/login">Log In</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
              <li><a href="#">Reset Password</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Public;
