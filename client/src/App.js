import React from 'react';
import './App.css';
import Paper from './components/paper/Paper';
import { Formik, Form } from 'formik';
import Field from './components/formik/field/FormField';
import Button from './components/buttons/Button';
import * as Yup from 'yup';
const SampleSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const App = () => {
  return (
    <div>
      <h1 className="text-dark-green">Welcome</h1>
      <div className="test-components">
        <Paper
          backgroundColor="white"
          shadow
          style={{
            width: '300px',
          }}>
          <h1>Signup</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SampleSchema}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {(form) => (
              <Form>
                <Field
                  name="email"
                  as="input"
                  label="Email address"
                  placeholder="Email"
                  type="text"
                  form={form}
                />
                <Field
                  label="Password"
                  name="password"
                  as="input"
                  type="password"
                  placeholder="Password"
                  form={form}
                />
                <Button
                  text="Sign up"
                  theme="green"
                  type="submit"
                  style={{ width: '100%' }}
                />
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </div>
  );
};

export default App;
