import React from 'react';
import DarkGreenButton from './components/buttons/dark-green-button/DarkGreenButton';
import './App.css';
const App = () => {
  return (
    <div>
      <h1 className="text-dark-green">Welcome</h1>
      <div className="test-components">
        <DarkGreenButton text={'Sign In'} />
      </div>
    </div>
  );
};

export default App;
