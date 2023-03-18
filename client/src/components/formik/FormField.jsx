import React from 'react';
import './FormField.css';
import { Field } from 'formik';
import classNames from 'classnames';
const FormField = ({ name, type, as, placeholder, label, form }) => {
  const { errors, touched } = form;
  const error = errors?.[name] && touched?.[name];
  return (
    <div className="form-input">
      {label && <p className="input-label">{label}</p>}
      <div className="field-wrapper">
        <Field
          as={as}
          name={name}
          type={type}
          className={classNames('field input-outline', {
            'input-error-outline': error,
          })}
          placeholder={placeholder}
        />
      </div>
      {form && error && (
        <div className="error-wrapper">
          <p className="error-text">* {errors?.[name]}</p>
        </div>
      )}
    </div>
  );
};

export default FormField;
