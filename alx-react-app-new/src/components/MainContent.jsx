import React from 'react';


const MainContent = () => {
  const mainContentStyle = {
      padding: '20px',
      margin: '20px auto',
      maxWidth: '1200px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
  };

  return (
    <div style={mainContentStyle}>
    <h1>Main Content</h1>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </div>
  );
}

export default MainContent;