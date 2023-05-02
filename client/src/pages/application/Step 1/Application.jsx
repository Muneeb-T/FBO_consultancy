import React, { useState } from 'react';
import './Application.css';
import Paper from '../../../components/paper/Paper';
import Button from '../../../components/buttons/Button';
import { IoArrowForward } from 'react-icons/io5';
const applicationTypes = ['New application', 'Renewal', 'File return'];

const Application = () => {
  const [applicationType, setApplicationType] = useState('');

  const handleApplicationType = (e) => {
    const { value } = e.target;
    setApplicationType(value);
  };

  const handleContinue = () => {
    alert(applicationType);
    if (!applicationType) {
      return false;
    }
  };

  return (
    <div className="application">
      <Paper
        className="paper"
        shadow>
        <div className="form-header">
          <p>Welcome to FBO</p>
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
        {/* <Formik>
          {(form) => (
            <Form>
              <Field
                as="input"
                label="Email address"
                placeholder="Email"
                type="text"
                form={form}
              />
              <Field
                label="Password"
                as="input"
                type="password"
                placeholder="Password"
                form={form}
              />
              <Button
                text="Login"
                theme="green"
                type="submit"
                disabled={loading}
                style={{ width: '100%' }}
              />
            </Form>
          )}
        </Formik> */}
      </Paper>
    </div>
  );
};

export default Application;
