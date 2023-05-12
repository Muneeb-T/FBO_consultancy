import React, { useState } from 'react';
import './Application.css';
import Paper from '../../../components/paper/Paper';
import Button from '../../../components/buttons/Button';
import { IoArrowForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const applicationTypes = ['New application', 'Renewal', 'File return'];

const Application = () => {
  const [applicationType, setApplicationType] = useState('');
  const navigate = useNavigate();
  const handleApplicationType = (e) => {
    const { value } = e.target;
    setApplicationType(value);
  };

  const handleContinue = () => {
    if (!applicationType) {
      return false;
    }
    navigate('new');
  };

  return (
    <div className="application">
      <Paper
        className="paper"
        shadow>
        <div className="form-header">
          <p>Welcome to {process.env.REACT_APP_NAME || 'APP'}</p>
        </div>
        <div className="choose-application-type">
          <p>Choose your application type</p>
          <div className="types">
            {applicationTypes.map((type, index) => (
              <div className="type">
                <input
                  key={index}
                  id={type}
                  type="radio"
                  value={type}
                  onChange={handleApplicationType}
                  name="application-type"
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
          <Button
            type="button"
            theme="green-text"
            text="Continue"
            onClick={handleContinue}
            disabled={!applicationType}
            endIcon={<IoArrowForward />}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Application;
