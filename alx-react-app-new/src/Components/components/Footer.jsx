
import React from 'react';

const Footer = () => {
  const footerStyle = {
      padding: '15px',
      textAlign: 'center',
      backgroundColor: '#333',
      color: '#fff',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
    <p>© 2023 City Lovers</p>
  </footer>
  );
}

export default Footer;







