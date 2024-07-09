import React from 'react';
import './AboutUs.css'; // You'll need to create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to our vehicle rental system! At Bnao, we pride ourselves on providing top-notch transportation solutions tailored to your needs. Whether you're embarking on a weekend adventure or require a reliable ride for your daily commute, we've got you covered.
        </p>
      </div>
      <div className="about-us-image">
        <img src="logo.png" alt="Vehicle Rental" />
      </div>
    </div>
  );
};

export default AboutUs;
