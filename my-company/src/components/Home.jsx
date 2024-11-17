import React from 'react';

function Home() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f8f9fa',
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
      <h1 style={headingStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>Your trusted partner for quality services.</p>
    </div>
  );
}

export default Home;
