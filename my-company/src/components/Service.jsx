import React from 'react';

function Services() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#e9ecef',
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
      <h1 style={headingStyle}>Our Services</h1>
      <p style={paragraphStyle}>We offer a wide range of services to cater to your needs.</p>
    </div>
  );
}

export default Services;
