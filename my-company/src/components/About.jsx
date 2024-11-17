import React from 'react';

function About() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f1f3f5',
  };

  const headingStyle = {
    fontSize: '2.5em',
    color: '#343a40',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: '#6c757d',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>We are a company dedicated to providing top-notch services to our clients.</p>
    </div>
  );
}

export default About;
