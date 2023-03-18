import React from 'react';
import Button from './components/buttons/Button';
import './App.css';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import Paper from './components/paper/Paper';
const App = () => {
  return (
    <div>
      <h1 className="text-dark-green">Welcome</h1>
      <div className="test-components">
        <Paper
          backgroundColor="white"
          shadow
          style={{
            width: '200px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            text={'Sign In'}
            type="white"
            startIcon={<IoIosArrowBack />}
            endIcon={<IoIosArrowForward />}
          />
        </Paper>
      </div>
    </div>
  );
};

export default App;
