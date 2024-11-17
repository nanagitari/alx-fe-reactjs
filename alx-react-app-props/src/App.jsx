import { useState } from 'react'
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <h1>User Profile</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
