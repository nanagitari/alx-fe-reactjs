import { useState } from 'react';

import React from 'react';

function Contact() {
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
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={paragraphStyle}>Reach out to us at contact@ourcompany.com or call us at 123-456-7890.</p>
    </div>
  );
}

export default Contact;
 