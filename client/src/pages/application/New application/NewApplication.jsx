import React, { useState } from 'react';
import './NewApplication.css';
import { Form, Formik } from 'formik';
import Field from '../../../components/formik/FormField';
import Button from '../../../components/buttons/Button';
import Paper from '../../../components/paper/Paper';
const NewApplication = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="new-application">
      <Paper
        className="paper"
        shadow>
        <div className="form-header">
          <p className="logo">{process.env.REACT_APP_NAME || 'APP'}</p>
          <p className="text">Apply for your Liscence</p>
        </div>
        <Formik>
          {(form) => (
            <Form className="application-form">
              <div className="inputs feather">
                <Field
                  as="input"
                  label="Applicant name"
                  placeholder="Applicant name"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Email address"
                  placeholder="Email address"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Phone number"
                  placeholder="Phone number"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Company name"
                  placeholder="Company name"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Door No"
                  placeholder="Door number"
                  type="number"
                  form={form}
                />
                <Field
                  rows={4}
                  as="textarea"
                  label="Company Address"
                  placeholder="Company Address"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Legislative assembly"
                  placeholder="Legislative assembly"
                  type="text"
                  form={form}
                />
                <Field
                  as="input"
                  label="Pincode"
                  placeholder="Pincode"
                  type="text"
                  form={form}
                />

                <Field
                  as="select"
                  name="liscenceDuration"
                  label="Liscence duration (Years)"
                  placeholder="Liscence duration"
                  type="number"
                  form={form}>
                  <option value={1}>1 year</option>
                  <option value={3}>3 years</option>
                  <option value={5}>5 years</option>
                </Field>

                <Field
                  as="select"
                  name="buissnessKind"
                  label="Buissness kind"
                  placeholder="Buissness kind"
                  type="text"
                  form={form}>
                  <option value="Partnership">Partnership</option>
                  <option value="Proprietor">Proprietor</option>
                  <option value="Corporation">Corporation</option>
                </Field>

                <Field
                  rows={5}
                  as="textarea"
                  label="Notes"
                  placeholder="Write your notes here..."
                  type="text"
                  form={form}
                />
              </div>
              <div className="submit-button">
                <Button
                  text="Submit application"
                  theme="green"
                  type="submit"
                  style={{ width: 'auto' }}
                  disabled={loading}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default NewApplication;
