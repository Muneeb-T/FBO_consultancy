import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login-page/Login';

const App = () => {
  return (
    <div>
      <Navbar activeId={0}/>
    </div>
  );
};

export default App;
