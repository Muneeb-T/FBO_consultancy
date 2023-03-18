import React from 'react';
import Button from './components/buttons/Button';
import './App.css';
import { IoIosArrowBack } from 'react-icons/io'
const App = () => {
  return (
    <div>
      <h1 className="text-dark-green">Welcome</h1>
      <div className="test-components">
        <Button
          text={'Sign In'}
          type="green-text"
          startIcon={<IoIosArrowBack/>}
          endIcon={<IoIosArrowBack/>}
        />
      </div>
    </div>
  );
};

export default App;
